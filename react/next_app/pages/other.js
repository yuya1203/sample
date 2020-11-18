import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => (
	<Layout header="Other" title="Other page.">
		<Counter />
		<hr />
		<div>
			<Link href="/">
				<button>&lt;&lt; Back to Top</button>
			</Link>
		</div>
	</Layout>
);



// import Link from 'next/link'
// import Layout from '../components/Layout';

// export default () => (
// 	<Layout header="Other" title="Other page.">
// 		<p>This is Other page.</p>
// 		<hr />
// 		<div>
// 			<Link href="/">
// 				<button>&lt;&lt; Back to Top</button>
// 			</Link>
// 		</div>
// 	</Layout>
// )

// const h1 = {
// 	fontSize: '72pt',
// 	fontWeight: 'bold',
// 	textAlign: 'right',
// 	letterSpacing: '-8px',
// 	color: '#f0f0f0',
// 	margin:'-40px 0ps'
// }

// const p = {
// 	margin: '0px',
// 	xolor: '#666',
// 	fontSize:'16pt'
// }

// export default () => <div>
// 	<h1 style={h1}>Next.js</h1>
// 	<p style={p}>This is Other page.</p>
// 	<hr />
// 	<div>
// 		<Link href="/">
// 			<a>&lt;&lt; Back to Index page</a>
// 		</Link>
// 	</div>
// </div>
