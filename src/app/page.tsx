import Board from './components/Board';
import Layout from './layout';

const Home: React.FC = () => {
	  return (
		      <Layout>
			        <h1 className="text-4xl font-bold mb-8">Square Showdown</h1>
					<Board />
				</Layout>
							    );
};

export default Home;

