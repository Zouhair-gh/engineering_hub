import 'package:flutter/material.dart';

class AddProduit extends StatelessWidget {
  const AddProduit({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Ajouter un produit'),
      content: TextField(
        decoration: const InputDecoration(
          hintText: 'Nom du produit',
          border: OutlineInputBorder(),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          child: const Text('Annuler'),
        ),
        ElevatedButton(
          onPressed: () {
            // TODO: Ajouter le produit
            Navigator.of(context).pop();
          },
          child: const Text('Ajouter'),
        ),
      ],
    );
  }
}
