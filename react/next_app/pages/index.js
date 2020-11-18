import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => (
	<Layout header="Next" title="Top page.">
		<Counter />
		<hr />
		<Link href="./other"><button>
			go to Other &gt;&gt;;
		</button></Link>
	</Layout>
);



// import Link from 'next/link';
// import style from '../static/Style';
// import Counter from '../components/Counter';
// import Layout from '../components/Layout';
// import Image from '../static/Image';

// export default () => (
// 	<Layout header="Next" title="Top page.">
// 		<p>Welcome to next.js!!!</p>
// 		<Image fname="image.jpg" size="250"/>
// 		<hr />
// 		<Link href="./other"><button>
// 			go to Other &gt;&gt;
// 		</button></Link>
// 	</Layout>
// );


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
// 	{style}
// 	{/* <h1 style={h1}>Next.js</h1>
// 	<div style={p}>Welcome to next.js!</div> */}
// 	<h1>Next.js</h1>
// 	<div>Welcome to next.js!</div>
// 	<hr />
// 	<div>
// 		<Counter />
// 		<Link href="/other">
// 			<button>Go to Other page &gt;&gt;</button>
// 			{/* <a>Go to Other page &gt;&gt;</a> */}
// 		</Link>
// 	</div>
// </div>




// export default () => <div>
// 	<style jsx>{`
// 	h1 { 
// 		font-size:68pt;
// 		font-weight:bold;
// 		text-align:right;
// 		letter-spacing:-8px;
// 		color:#f0f0f0;
// 		margin:-32px 0px;
// 	}
// 	p {
// 		margin:0px;
// 		color:#666;
// 		font-size:16pt;
// 	}
// 		`}
// 	</style>
// 	<h1>Next.js</h1>
// 	<p>Welcome to next.js!!!</p>
// 	<p>これはビルトインCSSによるスタイルです。</p>
// </div>
