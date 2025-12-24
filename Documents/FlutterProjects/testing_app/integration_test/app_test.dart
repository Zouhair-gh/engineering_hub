import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:testing_app/main.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('Tests d\'intégration de l\'application', () {
    testWidgets(
      'Lancement de l\'application et affichage de la page d\'accueil',
      (tester) async {
        await tester.pumpWidget(ApplicationTest());
        await tester.pumpAndSettle();

        expect(find.text('Liste des Éléments'), findsOneWidget);
        expect(find.byType(ListTile), findsWidgets);
      },
    );

    testWidgets('Ajout d\'un favori et navigation vers la page Favoris', (
      tester,
    ) async {
      await tester.pumpWidget(ApplicationTest());
      await tester.pumpAndSettle();

      // Tap favorite on first item
      await tester.tap(find.byIcon(Icons.favorite_border).first);
      await tester.pump();

      // Navigate to favorites page via AppBar icon
      await tester.tap(find.byIcon(Icons.favorite));
      await tester.pumpAndSettle();

      expect(find.text('Mes Favoris'), findsOneWidget);
      // The first element we favorited should appear
      expect(find.text('Élément 0'), findsOneWidget);
    });
  });
}
