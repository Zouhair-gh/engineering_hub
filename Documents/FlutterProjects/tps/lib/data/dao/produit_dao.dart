import 'package:drift/drift.dart';

import '../base.dart';

part 'produit_dao.g.dart';

@DriftAccessor(tables: [ProduitsTable])
class ProduitDao extends DatabaseAccessor<ProduitsDatabase>
    with _$ProduitDaoMixin {
  ProduitDao(ProduitsDatabase db) : super(db);

  Stream<List<ProduitsTableData>> watchProduits() {
    return (select(
      produitsTable,
    )..orderBy([(tbl) => OrderingTerm.asc(tbl.libelle)])).watch();
  }

  Future<int> insererProduit(ProduitsTableCompanion produit) {
    return into(produitsTable).insert(produit);
  }

  Future<void> supprimerProduit(int id) {
    return (delete(produitsTable)..where((tbl) => tbl.id.equals(id))).go();
  }

  Future<void> supprimerSelection() {
    return (delete(
      produitsTable,
    )..where((tbl) => tbl.selected.equals(true))).go();
  }

  Future<void> definirSelection(int id, bool selectionne) {
    return (update(produitsTable)..where((tbl) => tbl.id.equals(id))).write(
      ProduitsTableCompanion(selected: Value(selectionne)),
    );
  }

  Future<void> effacerSelection() {
    return (update(produitsTable)..where((tbl) => tbl.selected.equals(true)))
        .write(const ProduitsTableCompanion(selected: Value(false)));
  }
}
