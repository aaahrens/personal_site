import React, {Component} from 'react'


class AboutBody extends Component {

	render = () =>
		<div className="about-container">
			<div className="about-text-wrapper">
				<h2>
					Hi. I’m Adam, and I develop full stack applications
				</h2>
				<p>
					I first learned Android development while I worked at a hat shop, and was eventually able to get my
					first real developer job 4 months later.
				</p>
				<p>
					I love learning new environments, so I’ve played with most existing stacks, including the apache ecosystem (tomcat, hadoop),
					Unity and cool google libraries like groupcache. I love the “write once run everywhere” slogan,
					so I default to docker, JIT python compilers and static languages.
				</p>

				<p>
					Currently, I am experimenting with Kubernetes and Scaleway, attempting to construct a pgpool cluster
					and groupcache CDN without using kubeadm (it's difficult without the bootstrapping magic).
				</p>
				<p>
					Since IoT is the next big thing and I want to be ahead of the curve, I'm also learning embedded development and PCB construction.
					Right now I'm developing a usb-c mechanical keyboard with a usb hub attached in the wrist rest.
				</p>

				<br/>
				<h3>My Current Stack Philosophy:</h3>
				<h4 className="about-sub-header">Code Organization</h4>
				<ul className="sub-header-list">
					<li>
						The hardest part about a project is keeping organization clean and code documented.
					</li>
					<li>
						The most time consuming tasks are refactoring messy code. Keep it clean and style lint on every push.
					</li>
					<li>
						Keeping style and component structure <strong>nearly identical</strong> is the best practice I use
						to make sure my js/html/css code is readable.
					</li>
					<li>
						<strong>identifying abstraction layers</strong> and having solid file structure with those layers
						is key for me to organize my Java, Go and python code
					</li>
					<li>
						It's always preferable to lean toward <strong>resuable, static functions</strong> rather than
						maintaining state across multiple packages.
					</li>
				</ul>

				<h4 className="about-sub-header">Mobile Development</h4>
				<ul className="sub-header-list">
					<li>
						<strong>React Native</strong> is for apps that mainly work with no hardware
						implementations. The developer velocity by sharing the redux state and simply rewriting views
						is very nice to have, especially because react-native comes with some very good profiling tools.
					</li>
					<li>
						For Apps that work with something more than gps (for example, the camera or bluetooth) I firmly believe that
						writing it native is the way to go. Hardware specific functions shouldn't be homogenized.

						Spotify got it right, where their libraries are precompiled binaries and the delivery
						systems are native.
					</li>
				</ul>

				<h4 className="about-sub-header">Websites</h4>
				<ul className="sub-header-list">
					<li>
						I prefer <strong>React-Redux and Elm</strong>. Global stores are the way to go, and I <strong>really </strong>
						 hope that Elm gains popularity.
					</li>
					<li>
						For <strong>styling</strong>, I usually use sass/stylus, but I'm not particularly picky.
					</li>
				</ul>

				<h4 className="about-sub-header">Desktop Apps</h4>
				<ul className="sub-header-list">
					<li>
						I typically only build with <strong>Electron</strong> for desktop applications. The pains of developing for three operating systems is greater than the transcompiling issues and bugs that electron has. Dealing with three desktop environments
						is much more of a harm than the (admittedly frequent) chromium error.
					</li>
				</ul>
			</div>
		</div>
}


export default AboutBody