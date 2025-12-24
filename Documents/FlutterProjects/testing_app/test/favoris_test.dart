import 'package:flutter_test/flutter_test.dart';
import 'package:testing_app/models/favoris_model.dart';

void main() {
  group('Tests de la classe Favoris', () {
    test('Ajout d\'un élément', () {
      final favoris = Favoris();
      favoris.ajouter(1);
      expect(favoris.elements.contains(1), isTrue);
    });

    test('Suppression d\'un élément ajouté', () {
      final favoris = Favoris();
      favoris.ajouter(2);
      favoris.supprimer(2);
      expect(favoris.elements.contains(2), isFalse);
    });

    test('Ajout sans doublon', () {
      final favoris = Favoris();
      favoris.ajouter(3);
      favoris.ajouter(3);
      final count = favoris.elements.where((e) => e == 3).length;
      expect(count, 1);
    });

    test('Suppression d\'un élément absent ne plante pas', () {
      final favoris = Favoris();
      favoris.supprimer(99);
      expect(favoris.elements.isEmpty, isTrue);
    });

    test('Ordre des favoris préservé à l\'ajout', () {
      final favoris = Favoris();
      favoris.ajouter(1);
      favoris.ajouter(2);
      favoris.ajouter(3);
      expect(favoris.elements, [1, 2, 3]);
    });
  });
}
