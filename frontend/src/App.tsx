import BarCharts from "components/Charts/BarChart";
import DonutCharts from "components/Charts/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashborad de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarCharts />
          </div>
          <div className="col-sm-6">
            <h5>Todas as vendas</h5>
            <DonutCharts />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary"> Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default App;
