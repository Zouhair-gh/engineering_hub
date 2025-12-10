import 'package:drift/drift.dart' as drift;
import 'package:flutter/material.dart';

import 'data/base.dart';

class AddProduit extends StatefulWidget {
  const AddProduit({super.key});

  @override
  State<AddProduit> createState() => _AddProduitState();
}

class _AddProduitState extends State<AddProduit> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _libelleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _prixController = TextEditingController();
  final TextEditingController _photoController = TextEditingController();

  @override
  void dispose() {
    _libelleController.dispose();
    _descriptionController.dispose();
    _prixController.dispose();
    _photoController.dispose();
    super.dispose();
  }

  void _valider() {
    final form = _formKey.currentState;
    if (form == null || !form.validate()) {
      return;
    }
    final prix = double.parse(_prixController.text.trim().replaceAll(',', '.'));
    Navigator.of(context).pop(
      ProduitsTableCompanion(
        libelle: drift.Value(_libelleController.text.trim()),
        description: drift.Value(_descriptionController.text.trim()),
        prix: drift.Value(prix),
        photo: drift.Value(_photoController.text.trim()),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Ajouter un produit'),
      content: Form(
        key: _formKey,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextFormField(
                controller: _libelleController,
                autofocus: true,
                decoration: const InputDecoration(
                  labelText: 'Nom du produit',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Veuillez saisir un nom';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _descriptionController,
                decoration: const InputDecoration(
                  labelText: 'Description',
                  border: OutlineInputBorder(),
                ),
                maxLines: 3,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Veuillez saisir une description';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _prixController,
                decoration: const InputDecoration(
                  labelText: 'Prix',
                  hintText: 'Ex: 1499.99',
                  border: OutlineInputBorder(),
                ),
                keyboardType: const TextInputType.numberWithOptions(
                  decimal: true,
                ),
                validator: (value) {
                  final texte = value?.trim() ?? '';
                  if (texte.isEmpty) {
                    return 'Veuillez indiquer un prix';
                  }
                  final parsed = double.tryParse(texte.replaceAll(',', '.'));
                  if (parsed == null || parsed < 0) {
                    return 'Prix invalide';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _photoController,
                decoration: const InputDecoration(
                  labelText: 'URL de la photo',
                  hintText: 'https://...',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Veuillez fournir une URL';
                  }
                  final uri = Uri.tryParse(value.trim());
                  if (uri == null || !uri.isAbsolute) {
                    return 'URL invalide';
                  }
                  return null;
                },
              ),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Annuler'),
        ),
        ElevatedButton(onPressed: _valider, child: const Text('Ajouter')),
      ],
    );
  }
}
