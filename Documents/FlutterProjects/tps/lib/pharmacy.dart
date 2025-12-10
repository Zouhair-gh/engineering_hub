class Pharmacy {
  const Pharmacy({
    required this.name,
    required this.address,
    required this.latitude,
    required this.longitude,
    this.district,
    this.contact,
    this.openingHours,
    this.website,
    this.imageUrl,
  });

  final String name;
  final String address;
  final double latitude;
  final double longitude;
  final String? district;
  final String? contact;
  final String? openingHours;
  final String? website;
  final String? imageUrl;

  factory Pharmacy.fromJson(Map<String, dynamic> json) {
    final fields = json['fields'] as Map<String, dynamic>? ?? {};
    return Pharmacy(
      name: _readString(fields['pharmacie']),
      address: _readString(fields['adresse']),
      latitude: _readDouble(fields['latitude']) ??
          (fields['point_geo'] is List
              ? _readDouble((fields['point_geo'] as List).elementAtOrNull(0))
              : null) ??
          0,
      longitude: _readDouble(fields['longitude']) ??
          (fields['point_geo'] is List
              ? _readDouble((fields['point_geo'] as List).elementAtOrNull(1))
              : null) ??
          0,
      district: _readString(fields['quartier'], allowEmpty: true),
      contact: _readString(fields['contact'], allowEmpty: true),
      openingHours:
          _readString(fields['horaires_d_ouverture'], allowEmpty: true),
      website: _readString(fields['web'], allowEmpty: true),
      imageUrl: _readString(fields['image'], allowEmpty: true),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'pharmacie': name,
      'adresse': address,
      'latitude': latitude,
      'longitude': longitude,
      if (district != null) 'quartier': district,
      if (contact != null) 'contact': contact,
      if (openingHours != null) 'horaires_d_ouverture': openingHours,
      if (website != null) 'web': website,
      if (imageUrl != null) 'image': imageUrl,
    };
  }

  static String _readString(dynamic value, {bool allowEmpty = false}) {
    if (value == null) {
      return '';
    }
    final str = value.toString().trim();
    if (str.isEmpty && !allowEmpty) {
      return '';
    }
    return str;
  }

  static double? _readDouble(dynamic value) {
    if (value == null) {
      return null;
    }
    if (value is num) {
      return value.toDouble();
    }
    return double.tryParse(value.toString());
  }
}

extension<T> on List<T> {
  T? elementAtOrNull(int index) {
    if (index < 0 || index >= length) {
      return null;
    }
    return this[index];
  }
}
