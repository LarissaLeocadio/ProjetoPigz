import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DeliveryDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova entrega</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Tempo Estimado</Text>
        <Text style={styles.label}>Número de ID</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.value}>30 Min</Text>
        <Text style={styles.value}>#6789</Text>
      </View>

      <Text style={styles.deliveryPrice}>R$ 13,75</Text>

      <View style={styles.routeBox}>
        <Text style={styles.routeTitle}>Entrega</Text>
        <Text style={styles.routeSub}>Percurso Total: 8km</Text>

        <View style={styles.step}>
          <Text style={styles.point}>●</Text>
          <View>
            <Text style={styles.stepLabel}>Coleta</Text>
            <Text>Restaurante Recanto da Peixada</Text>
            <Text>Distancia: 2km</Text>
          </View>
        </View>

        <View style={styles.step}>
          <Text style={styles.point}>●</Text>
          <View>
            <Text style={styles.stepLabel}>Entrega</Text>
            <Text>Av: Cabo dos Soldados – Caranã</Text>
            <Text>Distancia: 6km</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptText}>✔ Aceitar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rejectButton}>
        <Text style={styles.rejectText}>✖ Rejeitar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontWeight: 'bold' },
  value: { fontSize: 18, fontWeight: 'bold', color: '#F26600' },
  deliveryPrice: { fontSize: 26, fontWeight: 'bold', color: '#F26600', textAlign: 'center', marginVertical: 20 },
  routeBox: { backgroundColor: '#f8f8f8', padding: 15, borderRadius: 10 },
  routeTitle: { fontWeight: 'bold', fontSize: 16 },
  routeSub: { color: '#555', marginBottom: 15 },
  step: { flexDirection: 'row', marginBottom: 15 },
  point: { fontSize: 20, color: '#F26600', marginRight: 10 },
  stepLabel: { fontWeight: 'bold', color: '#F26600' },
  acceptButton: { backgroundColor: '#F26600', padding: 15, borderRadius: 10, marginTop: 20 },
  acceptText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  rejectButton: { borderColor: '#F26600', borderWidth: 2, padding: 15, borderRadius: 10, marginTop: 10 },
  rejectText: { color: '#F26600', textAlign: 'center', fontWeight: 'bold' }
});