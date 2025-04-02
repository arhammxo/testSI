import React, {useRef} from 'react';
import { KnowMoreButton } from './Knowmorebutton';
import './RightPanel.css';
import { PlantInfoSection } from './PlantInfoSection';

const RightPanel = ({ sections = [] }) => {
  const {
    wetlandDescription = "",
    phytoCapacity = "",
    temperature = "",
    humidity = "",
    soil = "",
    ph = "",
    imgUrl = "",
    plantName = "",
    plantDetails = ""
  } = sections[0] || {};

  const plantData = [
    {
      title: "Wetland status:",
      description: wetlandDescription
    },
    {
      title: `Phytoremediation capacity of ${plantName}:`,
      description: phytoCapacity.split('_').join('\n')
    },
    {
      title: "Plant Habitat:",
      description: [
        `Temperature: ${temperature}`,
        `Humidity: ${humidity}`,
        `Soil: ${soil}`,
        `PH Value: ${ph}`
      ].join('\n')
    }
  ];

  const scrollToAboutPlant = () => {
    const aboutPlantSection = document.getElementById("about-plant-section");
    if (aboutPlantSection) {
      aboutPlantSection.scrollIntoView({ behavior: "smooth" });
    }};

  return (
    <div className="right-panel">
      <div className="plantContainer">
        <div className="contentWrapper">
          <aside className="sidebar">
            {plantData.map((section, index) => {
              if (index >= 1) {
                return (
                  <div key={index}>
                    <div className="sectionTitle">{section.title}</div>
                    <div className="titleListRightPanel">
                      {index === 1 ? (
                        <ul>
                          {section.description.split('\n').map((line, lineIndex) => (
                            <li key={lineIndex} className="titleListRightPanel">
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        section.description.split('\n').map((line, lineIndex) => (
                          <div key={lineIndex} className="titleEntry">
                            <div className="rightPanel-bullet" />
                            <span className="titleTextRightPanel">{line}</span>
                          </div>
                        ))
                      )}
                    </div>
                    <KnowMoreButton className="knowMoreButtonRightPanel" onClick={scrollToAboutPlant} />
                  </div>
                );
              }
              return (
                <PlantInfoSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  showKnowMore={false}
                />
              );
            })}
          </aside>
          
          <main className="mainContent">
            <div className="imageSection">
              <img
                src='plantimg.png'
               alt="Detailed view of the plant"
                className="plantImageRightPanel"
              />
              <div className="plantDescription">
                <h1 className="plantName">{plantName}</h1>
                <p className="plantDetails">
                  {plantDetails}
                </p>
                <KnowMoreButton className="knowMoreButtonRightPanel" onClick={scrollToAboutPlant} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;