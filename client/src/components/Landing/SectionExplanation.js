import React, { PureComponent } from 'react';

export default class SectionExplanation extends PureComponent {
    render() {
        return (
            <section className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card text-white bg-primary">
                        <div className="card-header">Nawyki</div>
                        <div className="card-body">
                            <h5 className="card-title">Codzienny rozwój</h5>
                            <p className="card-text">Codziennie wykonujesz rutynowe czynności, drobna zmiana w swoich przyzwyczajeniach pozwoli Ci na zmiane na lepsze </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card text-white bg-secondary">
                        <div className="card-header">Grywalizacja</div>
                        <div className="card-body">
                            <h5 className="card-title">System nagród i poziomów</h5>
                            <p className="card-text">Niech umacnianie nawyków będzie zabawą dzięki systemowi grywalizacji. Zdobywaj kolejne poziomy i nagrody.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card text-white bg-info">
                        <div className="card-header">Self-tracking</div>
                        <div className="card-body">
                            <h5 className="card-title">Monitorowanie swoich postępów</h5>
                            <p className="card-text">Za pomocą aplikacji możesz śledzić swoje postępy. Zobacz jak rosła siła Twojego nawyku w czasie na wykresie.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
  }
};
