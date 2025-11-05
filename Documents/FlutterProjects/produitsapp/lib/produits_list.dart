import 'package:flutter/material.dart';
import 'package:produitsapp/produit_box.dart';
import 'package:produitsapp/add_produit.dart';

class ProduitsList extends StatefulWidget {
  const ProduitsList({super.key});

  @override
  State<ProduitsList> createState() => _ProduitsListState();
}

class _ProduitsListState extends State<ProduitsList> {
  List liste = [
    ['Produit 1', false], 
    ['Produit 2', true], 
    ['Produit 3', false], 
    ['Produit 4', true], 
    ['Produit 5', false], 
    ['Produit 6', true], 
    ['Produit 7', false], 
    ['Produit 8', true], 
    ['Produit 9', false], 
    ['Produit 10', true]
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Produits (${liste.length})'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return const AddProduit();
                },
              );
            },
          ),
        ],
      ),
      body: ListView.builder(
        itemCount: liste.length,
        itemBuilder: (context, index) {
          return ProduitBox(
            nomProduit: liste[index][0],
            value: liste[index][1],
            onChanged: (bool? val) {
              setState(() {
                liste[index][1] = val!;
              });
            },
          );
        },
      ),
    );
  }
}