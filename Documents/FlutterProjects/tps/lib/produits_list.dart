import 'package:flutter/material.dart';

import 'add_produit.dart';
import 'data/base.dart';
import 'data/dao/produit_dao.dart';
import 'produit_box.dart';
import 'produit_details.dart';

class ProduitsList extends StatelessWidget {
  const ProduitsList({super.key, required this.produitDao});

  final ProduitDao produitDao;

  Future<void> _ajouterProduit(BuildContext context) async {
    final nouveauProduit = await showDialog<ProduitsTableCompanion?>(
      context: context,
      builder: (context) => const AddProduit(),
    );

    if (nouveauProduit == null) {
      return;
    }

    await produitDao.insererProduit(nouveauProduit);
  }

  Future<void> _supprimerSelection() async {
    await produitDao.supprimerSelection();
  }

  Future<void> _changerSelection(ProduitsTableData produit, bool? value) async {
    await produitDao.definirSelection(produit.id, value ?? false);
  }

  Future<void> _supprimerProduit(ProduitsTableData produit) async {
    await produitDao.supprimerProduit(produit.id);
  }

  void _afficherDetails(BuildContext context, ProduitsTableData produit) {
    showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      builder: (context) => ProduitDetails(produit: produit),
    );
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<ProduitsTableData>>(
      stream: produitDao.watchProduits(),
      builder: (context, snapshot) {
        final produits = snapshot.data ?? <ProduitsTableData>[];
        final hasSelection = produits.any((produit) => produit.selected);

        return Scaffold(
          appBar: AppBar(
            title: const Text('Produits'),
            actions: [
              IconButton(
                onPressed: hasSelection ? () => _supprimerSelection() : null,
                icon: const Icon(Icons.delete_sweep),
                tooltip: 'Supprimer la sélection',
              ),
            ],
          ),
          floatingActionButton: FloatingActionButton.extended(
            onPressed: () => _ajouterProduit(context),
            icon: const Icon(Icons.add),
            label: const Text('Ajouter un produit'),
          ),
          body: Builder(
            builder: (context) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator());
              }

              if (produits.isEmpty) {
                return const Center(
                  child: Text('Aucun produit enregistré pour le moment.'),
                );
              }

              return ListView.builder(
                padding: const EdgeInsets.symmetric(vertical: 16),
                itemCount: produits.length,
                itemBuilder: (context, index) {
                  final produit = produits[index];

                  return ProduitBox(
                    produit: produit,
                    selProduit: produit.selected,
                    onChanged: (value) => _changerSelection(produit, value),
                    delProduit: () => _supprimerProduit(produit),
                    onTap: () => _afficherDetails(context, produit),
                  );
                },
              );
            },
          ),
        );
      },
    );
  }
}
