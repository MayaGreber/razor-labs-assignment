export type DiagnosticType = 'bearing' | 'gear' | 'motor';
export type SeverityType = 'healthy' | 'alarm' | 'critical';

export interface DiagnosticEntry {
  id: string;
  created_at: string;
  type: DiagnosticType;
  severity: SeverityType;
}

export const diagnosticsMockData: DiagnosticEntry[] = [
  { id: '1', created_at: '2025-06-24T14:30:00Z', type: 'bearing', severity: 'critical' },
  { id: '6', created_at: '2025-06-24T09:15:00Z', type: 'gear', severity: 'alarm' },
  { id: '3', created_at: '2025-06-23T20:00:00Z', type: 'motor', severity: 'healthy' },
  { id: '4', created_at: '2025-06-22T11:45:00Z', type: 'bearing', severity: 'alarm' },
  { id: '5', created_at: '2025-06-22T08:00:00Z', type: 'motor', severity: 'critical' },
  { id: '2', created_at: '2025-06-21T17:30:00Z', type: 'gear', severity: 'healthy' },
  { id: '7', created_at: '2025-06-20T10:00:00Z', type: 'bearing', severity: 'alarm' },
  { id: '8', created_at: '2025-06-19T13:25:00Z', type: 'motor', severity: 'healthy' },
  { id: '9', created_at: '2025-06-18T15:50:00Z', type: 'gear', severity: 'critical' },
  { id: '10', created_at: '2025-06-17T09:00:00Z', type: 'bearing', severity: 'healthy' },
  { id: '15', created_at: '2025-06-16T18:10:00Z', type: 'motor', severity: 'alarm' },
  { id: '12', created_at: '2025-06-15T11:30:00Z', type: 'gear', severity: 'alarm' },
  { id: '13', created_at: '2025-06-14T07:45:00Z', type: 'bearing', severity: 'critical' },
  { id: '18', created_at: '2025-06-13T16:20:00Z', type: 'motor', severity: 'healthy' },
  { id: '11', created_at: '2025-06-12T14:55:00Z', type: 'gear', severity: 'healthy' },
  { id: '16', created_at: '2025-06-11T12:40:00Z', type: 'bearing', severity: 'alarm' },
  { id: '17', created_at: '2025-06-10T08:30:00Z', type: 'motor', severity: 'critical' },
  { id: '14', created_at: '2025-06-09T20:15:00Z', type: 'gear', severity: 'healthy' },
  { id: '19', created_at: '2025-06-08T10:05:00Z', type: 'bearing', severity: 'alarm' },
  { id: '20', created_at: '2025-06-07T14:00:00Z', type: 'motor', severity: 'critical' },
];
