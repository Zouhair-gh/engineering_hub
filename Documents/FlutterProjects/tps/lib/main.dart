import 'package:flutter/material.dart';

import 'map_page.dart';
import 'pharmacy.dart';
import 'pharmacy_service.dart';

void main() {
  runApp(const PharmacyApp());
}

class PharmacyApp extends StatelessWidget {
  const PharmacyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.green),
        useMaterial3: true,
      ),
      home: const PharmacyListPage(),
    );
  }
}

class PharmacyListPage extends StatefulWidget {
  const PharmacyListPage({super.key});

  @override
  State<PharmacyListPage> createState() => _PharmacyListPageState();
}

class _PharmacyListPageState extends State<PharmacyListPage> {
  late Future<List<Pharmacy>> _pharmaciesFuture;

  @override
  void initState() {
    super.initState();
    _pharmaciesFuture = PharmacyService().fetchPharmacies();
  }

  void _reload() {
    setState(() {
      _pharmaciesFuture = PharmacyService().fetchPharmacies();
    });
  }

  void _showDetails(Pharmacy pharmacy) {
    showDialog<void>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text(pharmacy.name),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              if (pharmacy.address.isNotEmpty) Text(pharmacy.address),
              if (pharmacy.district != null && pharmacy.district!.isNotEmpty)
                Text(pharmacy.district!),
              if (pharmacy.contact != null && pharmacy.contact!.isNotEmpty)
                Text('Contact : ${pharmacy.contact}'),
              if (pharmacy.openingHours != null &&
                  pharmacy.openingHours!.isNotEmpty)
                Text('Horaires : ${pharmacy.openingHours}'),
              if (pharmacy.website != null && pharmacy.website!.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: Text(pharmacy.website!),
                ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Fermer'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Pharmacy>>(
      future: _pharmaciesFuture,
      builder: (context, snapshot) {
        final isLoading = snapshot.connectionState == ConnectionState.waiting;
        if (isLoading) {
          return const Scaffold(
            appBar: _DefaultAppBar(),
            body: Center(child: CircularProgressIndicator()),
          );
        }

        if (snapshot.hasError) {
          return Scaffold(
            appBar: const _DefaultAppBar(),
            body: Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text('Impossible de récupérer les pharmacies.'),
                  const SizedBox(height: 12),
                  FilledButton(
                    onPressed: _reload,
                    child: const Text('Réessayer'),
                  ),
                ],
              ),
            ),
          );
        }

        final pharmacies = snapshot.data ?? <Pharmacy>[];
        return Scaffold(
          appBar: const _DefaultAppBar(),
          body: pharmacies.isEmpty
              ? const Center(
                  child: Text('Aucune pharmacie trouvée.'),
                )
              : ListView.separated(
                  itemCount: pharmacies.length,
                  separatorBuilder: (_, __) => const Divider(height: 1),
                  itemBuilder: (context, index) {
                    final pharmacy = pharmacies[index];
                    return ListTile(
                      title: Text(pharmacy.name),
                      subtitle: Text(pharmacy.address),
                      onTap: () => _showDetails(pharmacy),
                    );
                  },
                ),
          floatingActionButton: pharmacies.isEmpty
              ? null
              : FloatingActionButton.extended(
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => MapPage(pharmacies: pharmacies),
                      ),
                    );
                  },
                  icon: const Icon(Icons.map),
                  label: const Text('Voir la carte'),
                ),
        );
      },
    );
  }
}

class _DefaultAppBar extends StatelessWidget implements PreferredSizeWidget {
  const _DefaultAppBar();

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: const Text('Pharmacies de Meudon'),
    );
  }
}
