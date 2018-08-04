import React, { PureComponent } from 'react';

export default class SectionInfo extends PureComponent {
    render() {
        return (
        <div>
            <div className="info__box">
                <div className="info__card">
                    <div className="info__header info__header--one">
                        <img src={require('./hands_plants.svg')} alt="sasadź nawyki"/>
                    </div>
                    <div className="info__desc">
                        <h2 className="info__subtitle" >1. Posadzić nawyki</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur metus quis orci tincidunt consectetur. Fusce dignissim, massa sed porttitor dictum, leo metus imperdiet arcu.</p>
                    </div>
                </div>

                <div className="info__card">
                    <div className="info__header info__header--two">
                        <img src={require('./hands_plants2.svg')}  alt="rozwijaj nawyki"/>
                    </div>
                    <div className="info__desc">
                        <h2 className="info__subtitle" >2. Rozwijaj</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur metus quis orci tincidunt consectetur. Fusce dignissim, massa sed porttitor dictum, leo metus imperdiet arcu.</p>
                    </div>
                </div>

                <div className="info__card">
                    <div className="info__header info__header--three">
                        <img src={require('./idea_plants.svg')} alt="pielegnuj nawyki" />
                    </div>
                    <div className="info__desc">
                        <h2 className="info__subtitle" >3. Pielęgnuj </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur metus quis orci tincidunt consectetur. Fusce dignissim, massa sed porttitor dictum, leo metus imperdiet arcu.</p>
                    </div>
                </div>

            </div>
        </div>
        )
  }
};
