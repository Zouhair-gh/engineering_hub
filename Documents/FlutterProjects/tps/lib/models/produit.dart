import 'package:cloud_firestore/cloud_firestore.dart';

class Produit {
  const Produit({
    required this.id,
    required this.libelle,
    required this.description,
    required this.prix,
    required this.photo,
    required this.createdAt,
  });

  final String id;
  final String libelle;
  final String description;
  final double prix;
  final String photo;
  final DateTime? createdAt;

  factory Produit.fromFirestore(DocumentSnapshot<Map<String, dynamic>> doc) {
    final data = doc.data() ?? <String, dynamic>{};
    final timestamp = data['createdAt'];
    return Produit(
      id: doc.id,
      libelle: data['libelle'] as String? ?? 'Sans libellé',
      description: data['description'] as String? ?? '',
      prix: (data['prix'] as num?)?.toDouble() ?? 0,
      photo: data['photo'] as String? ?? '',
      createdAt: timestamp is Timestamp ? timestamp.toDate() : null,
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'libelle': libelle,
      'description': description,
      'prix': prix,
      'photo': photo,
      'createdAt': FieldValue.serverTimestamp(),
    };
  }
}
