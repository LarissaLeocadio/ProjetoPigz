import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visão geral</Text>

      <View style={styles.earningsBox}>
        <Text style={styles.labelWhite}>Ganhos do Dia</Text>
        <Text style={styles.earning}>R$ 150</Text>
        <Text style={styles.date}>29/07</Text>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.sectionTitle}>Resumos das Entregas</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryItem}>Aceitas: 15</Text>
          <Text style={styles.summaryItem}>Rejeitadas: 5</Text>
          <Text style={styles.summaryItem}>Total: 20</Text>
        </View>
      </View>

      <View style={styles.deliveryBox}>
        <Text style={styles.sectionTitle}>Iniciar Nova Entrega</Text>
        <Text style={styles.inputLabel}>Número de Identificação</Text>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.okButton}><Text style={styles.okText}>OK</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanText}>📷 Escanear Qrcode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  earningsBox: { backgroundColor: '#F26600', padding: 20, borderRadius: 10, marginBottom: 20 },
  labelWhite: { color: '#fff', fontWeight: '600' },
  earning: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  date: { color: '#fff', textAlign: 'right' },
  summaryBox: { backgroundColor: '#f8f8f8', padding: 15, borderRadius: 10, marginBottom: 20 },
  sectionTitle: { fontWeight: 'bold', marginBottom: 10 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between' },
  summaryItem: { fontSize: 16 },
  deliveryBox: { backgroundColor: '#f8f8f8', padding: 15, borderRadius: 10 },
  inputLabel: { marginBottom: 5 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#F26600', borderRadius: 8, padding: 10 },
  okButton: { marginLeft: 10, backgroundColor: '#F26600', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8 },
  okText: { color: '#fff', fontWeight: 'bold' },
  scanButton: { backgroundColor: '#F26600', padding: 15, borderRadius: 8, marginTop: 10 },
  scanText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});