import { fetchCarList } from "@/api/request";
import CarList from "@/components/CarList";

const CarListPage = () => <CarList />;

export default CarListPage;

// export async function getServerSideProps() {
//   const posts = await fetchCarList();

//   return {
//     props: {
//       posts: posts || [],
//     },
//   };
// }
