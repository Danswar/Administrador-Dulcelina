const productos = [
        {
          id: "7dfbd-a82-cf13-4b4c-ef75370362ac",
          codigo: "11111111",
          nombre: "CACAO EN POLVO 1KG",
          stock: "200",
          stock_min: "1",
          p_costo_bsf: "100",
          p_costo_usd: "10",
          p_venta_bsf: 2100,
          margen_min: 40,
          dolar_base: 10,
        },
        {
          id: "6b0d7c5-c5be-56-358b-3ce33771d76",
          codigo: "111111112",
          nombre: "NEVA-AZUCAR BOLSA 100GRM",
          stock: "14",
          stock_min: 0,
          p_costo_bsf: "800",
          p_costo_usd: "6.66",
          p_venta_bsf: 1800,
          margen_min: 50.150150150150154,
          dolar_base: 120.12012012012012,
        },
        {
          id: "63fed2-6f2a-0625-81b5-580c8725fa8",
          codigo: "33333333",
          nombre: "FRUTOS CONFITADOS",
          stock: "100",
          stock_min: 0,
          p_costo_bsf: "450",
          p_costo_usd: "15",
          p_venta_bsf: 3500,
          margen_min: 33.33333333333333,
          dolar_base: 30,
        },
        {
          id: "63fed2-6f2a-dans-81b5-580c8725fa8",
          codigo: "33333123",
          nombre: "TORTERA PROFESIONAL",
          stock: "100",
          stock_min: 0,
          p_costo_bsf: "350",
          p_costo_usd: "15",
          p_venta_bsf: 3500,
          margen_min: 33.33333333333333,
          dolar_base: 160,
        }
];


export default function( state=productos , action ) {
    switch(action.type){
        default:
            return state;
    }
}