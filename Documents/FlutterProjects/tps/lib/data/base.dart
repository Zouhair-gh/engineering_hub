import 'dart:io';

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

part 'base.g.dart';

class ProduitsTable extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get libelle => text().withLength(min: 1, max: 255)();
  TextColumn get description => text()();
  RealColumn get prix => real()();
  TextColumn get photo => text()();
  BoolColumn get selected => boolean().withDefault(const Constant(false))();
}

LazyDatabase _openConnection() {
  return LazyDatabase(() async {
    final dir = await getApplicationDocumentsDirectory();
    final file = File(p.join(dir.path, 'produits.sqlite'));
    return NativeDatabase(file);
  });
}

@DriftDatabase(tables: [ProduitsTable])
class ProduitsDatabase extends _$ProduitsDatabase {
  ProduitsDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  @override
  MigrationStrategy get migration => MigrationStrategy(
    onCreate: (Migrator m) async {
      await m.createAll();
      await batch((batch) {
        batch.insertAll(produitsTable, [
          ProduitsTableCompanion.insert(
            libelle: 'Ordinateur portable',
            description: 'Ultrabook 14" léger avec 16 Go de RAM et 512 Go SSD',
            prix: 8999.99,
            photo: 'https://picsum.photos/seed/laptop/200/200',
          ),
          ProduitsTableCompanion.insert(
            libelle: 'Smartphone',
            description: 'Écran AMOLED 120 Hz et triple caméra 64 MP',
            prix: 5499.50,
            photo: 'https://picsum.photos/seed/phone/200/200',
          ),
          ProduitsTableCompanion.insert(
            libelle: 'Casque audio',
            description: 'Casque sans fil à réduction de bruit active',
            prix: 1999.00,
            photo: 'https://picsum.photos/seed/headphones/200/200',
          ),
          ProduitsTableCompanion.insert(
            libelle: 'Montre connectée',
            description: 'Jusqu’à 7 jours d’autonomie avec suivi santé complet',
            prix: 1299.90,
            photo: 'https://picsum.photos/seed/watch/200/200',
          ),
          ProduitsTableCompanion.insert(
            libelle: 'Clavier mécanique',
            description: 'Switchs bleus et rétroéclairage RGB personnalisable',
            prix: 749.00,
            photo: 'https://picsum.photos/seed/keyboard/200/200',
          ),
        ]);
      });
    },
  );
}
