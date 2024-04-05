from flask import Flask, render_template, request, redirect

app = Flask(__name__)



@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form_data = request.form
        print("Datos del formulario recibidos:")
        for key, value in form_data.items():
            print(f"{key}: {value}")

        return redirect('/dashboard')

    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard/dashboard.html')

@app.route('/informacionPorCentroDeCostos', methods=['GET', 'POST'])
def informacion_por_centro_de_costos():
    if request.method == '':
        return redirect('/TotalPorCentroDeCostos')  
    return render_template('informacionPorCentroDeCostos/informacionPorCentroDeCostos.html')

@app.route('/InformacionYMovimientosPorTarjeta')
def informacion_y_movimientos_por_tarjeta():
    return render_template('InformacionYMovimientosPorTarjeta/InformacionYMovimientosPorTarjeta.html')

@app.route('/TotalPorCentroDeCostos')
def total_por_centro_de_costos():
    return render_template('informacionPorCentroDeCostos/TotalPorCentroDeCostos/TotalPorCentroDeCostos.html')

@app.route('/PeriodoAnteriorCentroDeCostos')
def periodo_anterior_centro_de_costos():
    return render_template('PeriodoAnteriorCentroDeCostos/PeriodoAnteriorCentroDeCostos.html')

@app.route('/PeriodoAnteriorMovimientosPorTarjeta')
def periodo_anterior_movimientos_por_tarjeta():
    return render_template('PeriodoAnteriorMovimientosPorTarjeta/PeriodoAnteriorMovimientosPorTarjeta.html')

@app.route('/AutorizacionesPorTarjeta')
def autorizaciones_por_tarjeta():
    return render_template('AutorizacionesPorTarjeta/AutorizacionesPorTarjeta.html')

@app.route('/RealizarDistribucionPorOrdenAlfabetico')
def realizar_distribucion_por_orden_alfabetico():
    return render_template('RealizarDistribucionPorOrdenAlfabetico/RealizarDistribucionPorOrdenAlfabetico.html')

@app.route('/RealizarDistribucion')
def realizar_distribucion():
    return render_template('RealizarDistribucion/RealizarDistribucion.html')


@app.route('/DistribucionesDeFondosRealizadas')
def distribuciones_de_fondos_realizadas():
    return render_template('DistribucionesDeFondosRealizadas/DistribucionesDeFondosRealizadas.html')

@app.route('/RealizarTransferenciaPorOrdenAlfabetico')
def realizar_transferencias_por_orden_alfabetico():
    return render_template('RealizarTransferenciaPorOrdenAlfabetico/RealizarTransferenciaPorOrdenAlfabetico.html')

@app.route('/RealizarTransferencia')
def realizar_transferencia():
    return render_template('RealizarTransferencia/RealizarTransferencia.html')

@app.route('/TransferenciasRealizadas')
def transferencias_realizadas():
    return render_template('TransferenciasRealizadas/TransferenciasRealizadas.html')

@app.route('/UltimasLiquidaciones')
def ultimas_liquidaciones():
    return render_template('UltimasLiquidaciones/UltimasLiquidaciones.html')


if __name__ == '__main__':
    app.run(debug=True)