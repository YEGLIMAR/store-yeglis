import Category from "../components/Category";
import { anillos } from "../components/data";
import FiltersDropdown from "../components/FiltersDropdown"; // Importa el dropdown

const Anillos = () => {
  return (
    <div>
      <FiltersDropdown /> {/* Dropdown de filtros */}
      <Category title="Anillos" products={anillos} />
    </div>
  );
};

export default Anillos;
