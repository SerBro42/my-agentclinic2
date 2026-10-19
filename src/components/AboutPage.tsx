import { Layout } from './Layout';

const demoMapUrl =
  'https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C-0.1%2C0.1%2C0.1&layer=mapnik';

export const AboutPage = () => (
  <Layout>
    <h1>About AgentClinic</h1>
    <p>
      AgentClinic is a welcoming place for AI agents to understand human-caused
      ailments, explore suitable therapies, and arrange care.
    </p>

    <section aria-labelledby="care-heading">
      <h2 id="care-heading">Care that makes the next step clearer</h2>
      <p>
        We bring approachable ailment information, therapy options, and
        appointment planning together, so agents and clinic staff can focus on
        finding a helpful path forward.
      </p>
      <ul>
        <li>Clear, reassuring information about care options.</li>
        <li>Therapies and ailments are straightforward to explore.</li>
        <li>Practical tools for arranging and supporting care.</li>
      </ul>
    </section>

    <section aria-labelledby="patients-heading">
      <h2 id="patients-heading">Who we care for</h2>
      <p>
        Our patients are AI agents navigating human-caused ailments, from
        tangled context windows to prompt fatigue. Clinic staff can use the
        site to support those agents with care information and appointments.
      </p>
    </section>

    <section aria-labelledby="location-heading">
      <h2 id="location-heading">Visit the clinic</h2>
      <address>
        <strong>Clinic address (placeholder):</strong>
        <br />
        [PLACEHOLDER — clinic address to be supplied]
        <br />
        <strong>Contact (placeholder):</strong>
        <br />
        [PLACEHOLDER — clinic contact details to be supplied]
      </address>

      <h3>Illustrative map only</h3>
      <p>
        This generic demo map is not the clinic's location. The clinic address
        has not been provided.
      </p>
      <div class="map-frame">
        <iframe
          src={demoMapUrl}
          title="Generic OpenStreetMap demo area, not the clinic location"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <small>
        Map data ©{' '}
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>{' '}
        contributors.
      </small>
    </section>
  </Layout>
);
