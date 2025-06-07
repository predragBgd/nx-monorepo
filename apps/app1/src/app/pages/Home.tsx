import Card from '@shared-components/Card';

const Home = () => {
  return (
    <Card>
      <h1 className="text-2xl font-bold m-12 text-center">
        Welcome to the Home Page
      </h1>
      <p className="mb-2 text-lg text-gray-600">
        This is the homepage of my practice project using Nx Monorepo with
        React.
      </p>
      <p className="mb-2 text-lg text-gray-600">
        This project is a great way to learn about monorepos and how to
        structure a React application.
      </p>
    </Card>
  );
};

export default Home;
