
export interface TrakingI {
  nombreContratista: string;
  idProyecto: number;
  requerimientos: {
    tituloTrabajo: string;
    descripcionTrabajo: string;
    listaRequerimientos: string[];
    aceptado: boolean;
  };
  visitaPrevia: {
    costo: number;
    detallesAdicionales: string;
  };
  cotizacion: {
    opciones: {
      descripcion: string;
      costo: number;
      detalle: string;
    }[];
  };
  aprobacionProyecto: boolean;
}
