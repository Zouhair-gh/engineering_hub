import 'package:flutter/material.dart';

class ProduitBox extends StatelessWidget {
  final String nomProduit;
  final bool value;
  final ValueChanged<bool?>? onChanged;
  
  const ProduitBox({
    super.key, 
    required this.nomProduit,
    this.value = false,
    this.onChanged,
  });
 
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(8.0),
      padding: const EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: Colors.blue.shade100,
        borderRadius: BorderRadius.circular(8.0),
        border: Border.all(color: Colors.blue, width: 2.0),
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(
              nomProduit,
              style: const TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.black87,
              ),
            ),
          ),
          Checkbox(
            value: value,
            onChanged: onChanged,
          ),
        ],
      ),
    );
  }
}