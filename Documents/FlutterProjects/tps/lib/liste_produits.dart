import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'models/produit.dart';
import 'widgets/produit_item.dart';

class ListeProduits extends StatefulWidget {
  const ListeProduits({super.key});

  @override
  State<ListeProduits> createState() => _ListeProduitsState();
}

class _ListeProduitsState extends State<ListeProduits> {
  late final CollectionReference<Map<String, dynamic>> _produitsRef;

  @override
  void initState() {
    super.initState();
    _produitsRef = FirebaseFirestore.instance.collection('produits');
  }

  Future<void> _ajouterProduit() async {
    final formKey = GlobalKey<FormState>();
    final libelleController = TextEditingController();
    final descriptionController = TextEditingController();
    final prixController = TextEditingController();
    final photoController = TextEditingController();

    final result = await showDialog<bool>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Ajouter un produit'),
          content: Form(
            key: formKey,
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextFormField(
                    controller: libelleController,
                    decoration: const InputDecoration(labelText: 'Libellé'),
                    validator: _notEmptyValidator,
                  ),
                  const SizedBox(height: 12),
                  TextFormField(
                    controller: descriptionController,
                    decoration: const InputDecoration(labelText: 'Description'),
                    maxLines: 3,
                    validator: _notEmptyValidator,
                  ),
                  const SizedBox(height: 12),
                  TextFormField(
                    controller: prixController,
                    decoration: const InputDecoration(labelText: 'Prix'),
                    keyboardType: const TextInputType.numberWithOptions(
                      decimal: true,
                    ),
                    validator: (value) {
                      final message = _notEmptyValidator(value);
                      if (message != null) return message;
                      final parsed = double.tryParse(
                        value!.replaceAll(',', '.'),
                      );
                      if (parsed == null || parsed < 0) {
                        return 'Prix invalide';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 12),
                  TextFormField(
                    controller: photoController,
                    decoration: const InputDecoration(
                      labelText: 'URL de la photo',
                    ),
                  ),
                ],
              ),
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(false),
              child: const Text('Annuler'),
            ),
            ElevatedButton(
              onPressed: () async {
                if (!formKey.currentState!.validate()) {
                  return;
                }
                final produit = Produit(
                  id: '',
                  libelle: libelleController.text.trim(),
                  description: descriptionController.text.trim(),
                  prix: double.parse(
                    prixController.text.trim().replaceAll(',', '.'),
                  ),
                  photo: photoController.text.trim(),
                  createdAt: DateTime.now(),
                );
                await _produitsRef.add(produit.toJson());
                if (context.mounted) {
                  Navigator.of(context).pop(true);
                }
              },
              child: const Text('Ajouter'),
            ),
          ],
        );
      },
    );

    if (result == true && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Produit ajouté avec succès.')),
      );
    }
  }

  Future<void> _supprimerProduit(Produit produit) async {
    await _produitsRef.doc(produit.id).delete();
    if (mounted) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('${produit.libelle} supprimé.')));
    }
  }

  Future<void> _afficherDetails(Produit produit) async {
    await showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                produit.libelle,
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 12),
              Text(
                '${produit.prix.toStringAsFixed(2)} MAD',
                style: Theme.of(context).textTheme.titleMedium,
              ),
              const SizedBox(height: 12),
              produit.photo.isEmpty
                  ? const SizedBox.shrink()
                  : ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Image.network(
                        produit.photo,
                        height: 180,
                        width: double.infinity,
                        fit: BoxFit.cover,
                        errorBuilder: (context, error, stackTrace) => Container(
                          height: 180,
                          alignment: Alignment.center,
                          color: Theme.of(context).colorScheme.surfaceVariant,
                          child: const Icon(Icons.broken_image),
                        ),
                      ),
                    ),
              const SizedBox(height: 16),
              Text(produit.description),
              const SizedBox(height: 16),
              if (produit.createdAt != null)
                Text(
                  'Dernière mise à jour : ${produit.createdAt}',
                  style: Theme.of(context).textTheme.bodySmall,
                ),
            ],
          ),
        );
      },
    );
  }

  Future<void> _signOut() async {
    await FirebaseAuth.instance.signOut();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Produits (Firestore)'),
        actions: [
          IconButton(
            onPressed: _signOut,
            tooltip: 'Se déconnecter',
            icon: const Icon(Icons.logout),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _ajouterProduit,
        icon: const Icon(Icons.add),
        label: const Text('Ajouter'),
      ),
      body: StreamBuilder<QuerySnapshot<Map<String, dynamic>>>(
        stream: _produitsRef.orderBy('createdAt', descending: true).snapshots(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Erreur: ${snapshot.error}'));
          }
          final docs =
              snapshot.data?.docs ??
              <QueryDocumentSnapshot<Map<String, dynamic>>>[];
          if (docs.isEmpty) {
            return const Center(child: Text('Aucun produit à afficher.'));
          }
          final produits = docs.map(Produit.fromFirestore).toList();
          return ListView.builder(
            itemCount: produits.length,
            itemBuilder: (context, index) {
              final produit = produits[index];
              return ProduitItem(
                produit: produit,
                onTap: () => _afficherDetails(produit),
                onDelete: () => _supprimerProduit(produit),
              );
            },
          );
        },
      ),
    );
  }

  String? _notEmptyValidator(String? value) {
    if (value == null || value.trim().isEmpty) {
      return 'Champ obligatoire';
    }
    return null;
  }
}

