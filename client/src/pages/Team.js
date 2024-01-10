import { Link } from 'react-router-dom';
import Breadcrumb from '../components/frontend/widget/Breadcrumb';
import teams from './../data/teams';

function Team() {
	return (
		<main id="main">
			<Breadcrumb page="Team" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."/>

			<section id="team" className="team">
			  <div className="container">

			    <div className="row">
					{
						teams.map(team => (
					      <div key={team.id} className="col-lg-4 col-md-6 d-flex align-items-stretch">
					        <div className="member" data-aos="fade-up">
					          <div className="member-img">
					            <img src={team.image} className="img-fluid" alt="" />
					            <div className="social">
					              <Link to=""><i className="bi bi-twitter"></i></Link>
					              <Link to=""><i className="bi bi-facebook"></i></Link>
					              <Link to=""><i className="bi bi-instagram"></i></Link>
					              <Link to=""><i className="bi bi-linkedin"></i></Link>
					            </div>
					          </div>
					          <div className="member-info">
					            <h4>{team.name}</h4>
					            <span>{team.occupation}</span>
					            <p>{team.quote}</p>
					          </div>
					        </div>
					      </div>
							))
						}

			    </div>

			  </div>
			</section>
		</main>
	)
}


export default Team;
