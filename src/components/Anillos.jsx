/**
 * The `Anillos` function renders a category page for displaying rings with a filters dropdown
 * component.
 * @returns The `Anillos` component is being returned. It includes a `FiltersDropdown` component for
 * filters and a `Category` component for displaying products with the title "Anillos" and data from
 * the `anillos` array.
 */
import Category from "../components/Category";
import { anillos } from "../components/data";
import FiltersDropdown from "../components/FiltersDropdown"; 

const Anillos = () => {
  return (
    <div>
      <FiltersDropdown /> 
      <Category title="Anillos" products={anillos} />
    </div>
  );
};

export default Anillos;
