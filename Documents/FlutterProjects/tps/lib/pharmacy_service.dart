import 'dart:convert';

import 'package:http/http.dart' as http;

import 'pharmacy.dart';

class PharmacyService {
  const PharmacyService();

  static const _endpoint =
      'https://api.jsonbin.io/v3/b/658212f71f5677401f10889b';

  Future<List<Pharmacy>> fetchPharmacies() async {
    final response = await http.get(Uri.parse(_endpoint));
    if (response.statusCode != 200) {
      throw http.ClientException(
        'Request failed with status: ${response.statusCode}',
        Uri.parse(_endpoint),
      );
    }

    final root = jsonDecode(response.body) as Map<String, dynamic>;
    final record = root['record'] as Map<String, dynamic>?;
    final pharmacies = record?['pharmacies'] as List<dynamic>? ?? [];
    return pharmacies
        .map((raw) => Pharmacy.fromJson(raw as Map<String, dynamic>))
        .toList();
  }
}
