import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'package:testing_app/models/favoris_model.dart';
import 'package:testing_app/ui/favoris_screen.dart';

void main() {
  testWidgets('PageFavoris affiche et supprime des éléments', (
    WidgetTester tester,
  ) async {
    final favoris = Favoris();
    favoris.ajouter(1);
    favoris.ajouter(2);

    await tester.pumpWidget(
      ChangeNotifierProvider.value(
        value: favoris,
        child: MaterialApp(home: PageFavoris()),
      ),
    );

    expect(find.text('Mes Favoris'), findsOneWidget);
    expect(find.text('Élément 1'), findsOneWidget);
    expect(find.text('Élément 2'), findsOneWidget);

    // Delete one element
    await tester.tap(find.byIcon(Icons.delete).first);
    await tester.pump();

    expect(find.text('Élément 1'), findsNothing);
    expect(find.text('Élément 2'), findsOneWidget);
  });
}
