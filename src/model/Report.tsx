export interface Report {
  id: string;
  title: string;
  description: string;
  price: number;
  content: string;
}
export interface StateReports {
  reports: Report[];
}
export interface ReportListReponse {
  id: string;
  title: string;
  description: string;
  price: number;
  content: string;
}
