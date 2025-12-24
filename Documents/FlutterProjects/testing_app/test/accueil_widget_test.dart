import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'package:testing_app/models/favoris_model.dart';
import 'package:testing_app/ui/accueil.dart';

void main() {
  Widget buildAccueil() {
    return ChangeNotifierProvider(
      create: (_) => Favoris(),
      child: MaterialApp(home: PageAccueil()),
    );
  }

  testWidgets('Affichage de la page d\'accueil', (WidgetTester tester) async {
    await tester.pumpWidget(buildAccueil());

    expect(find.text('Liste des Éléments'), findsOneWidget);
    expect(find.byType(ListTile), findsWidgets);
  });

  testWidgets('Interaction avec le bouton Favoris', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(buildAccueil());

    final emptyHeartFinder = find.byIcon(Icons.favorite_border);
    expect(emptyHeartFinder, findsWidgets);

    // Tap the first favorite_border icon
    await tester.tap(emptyHeartFinder.first);
    await tester.pump();

    // Now a filled heart should appear somewhere
    expect(find.byIcon(Icons.favorite), findsWidgets);
  });

  testWidgets('Navigation vers la page Favoris', (WidgetTester tester) async {
    await tester.pumpWidget(buildAccueil());

    // AppBar has a favorite icon used for navigation
    await tester.tap(find.byIcon(Icons.favorite));
    await tester.pumpAndSettle();

    expect(find.text('Mes Favoris'), findsOneWidget);
  });

  testWidgets('Vérification du défilement dans PageAccueil', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(buildAccueil());

    // Scroll until the last item is visible
    await tester.scrollUntilVisible(
      find.text('Élément 49'),
      300.0,
      scrollable: find.byType(Scrollable),
    );
    await tester.pump();

    expect(find.text('Élément 49'), findsOneWidget);
  });
}
