import React, {Component} from 'react'


class AboutBody extends Component {

	render = () =>
		<div className="about-container">
			<div className="about-text-wrapper">
				<p>
					Hi, I’m Adam and I like coding.
				</p>
				<p>

					I dropped out of UC Berkeley at the ripe age of 21 and proceeded to fall in love with programming. I started learning Android development while I worked at a hat shop, and was eventually able to get my first real developer job 6 months later.
				</p>

				<p>I love tinkering around, so I’ve played with most existing stacks, including the yesteryear apache tomcat platform. My currently preferred production environment is an async python data scraper, go-lang API, a react-redux front-end and docker swarm/nginx for layer 4 -7 load balancing.

				</p>
				<p>
				For mobile I do prefer react-native now, I love the *incredibly* shorter development lifecycle and the ability to transfer the redux datastore code between all platforms.

				I can work with Android, Spring, and SparkJava (my first language and stack was full blown java), and I know most languages through other platforms, (IE I know C# because of Unity).
				</p>
				<p>
					I suppose I love the “write once run everywhere” slogan.
				</p>
				<p>
					Currently, I am experimenting with Kubernetes and Scaleway, attempting to construct a pgpool cluster and groupcache CDN with no kubeadm, trying to make it from scratch and understand the magic behind Kubernetes =)
				</p>
				<p>

					I’m also learning how to scale Unity projects, and embedded development since IoT is now apparently the hot thing.
				</p>
				<p>
					Shoot me a message if you wanna chat or just have me do a website, app or API.
				</p>
			</div>
		</div>
}


export default AboutBody