import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

import 'pharmacy.dart';

class MapPage extends StatelessWidget {
  const MapPage({super.key, required this.pharmacies});

  final List<Pharmacy> pharmacies;

  @override
  Widget build(BuildContext context) {
    final markers = pharmacies
        .where((pharmacy) =>
            pharmacy.latitude != 0 && pharmacy.longitude != 0 &&
            !pharmacy.latitude.isNaN && !pharmacy.longitude.isNaN)
        .map(
          (pharmacy) => Marker(
            width: 40,
            height: 40,
            point: LatLng(pharmacy.latitude, pharmacy.longitude),
            builder: (_) => IconButton(
              icon: const Icon(Icons.location_on, color: Colors.red),
              onPressed: () => _showPharmacy(context, pharmacy),
            ),
          ),
        )
        .toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Carte des pharmacies'),
      ),
      body: FlutterMap(
        options: const MapOptions(
          initialCenter: LatLng(48.807, 2.235),
          initialZoom: 13,
        ),
        children: [
          TileLayer(
            urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            userAgentPackageName: 'com.example.tps',
          ),
          MarkerLayer(markers: markers),
        ],
      ),
    );
  }

  void _showPharmacy(BuildContext context, Pharmacy pharmacy) {
    showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                pharmacy.name,
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 8),
              Text(pharmacy.address),
              if (pharmacy.district != null && pharmacy.district!.isNotEmpty)
                Text(pharmacy.district!),
              if (pharmacy.contact != null && pharmacy.contact!.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: Text('Contact : ${pharmacy.contact}'),
                ),
              if (pharmacy.openingHours != null &&
                  pharmacy.openingHours!.isNotEmpty)
                Text('Horaires : ${pharmacy.openingHours}'),
              if (pharmacy.website != null && pharmacy.website!.isNotEmpty)
                Text('Site : ${pharmacy.website}'),
            ],
          ),
        );
      },
    );
  }
}
