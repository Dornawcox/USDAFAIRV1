// USDA Conservation Tools & Datasets Registry
// Auto-generated from ConservationDataTools_31Oct2024.csv
// Version-controlled source of truth — edit this file to update cards
// To add a tool: add a new object to REGISTRY.software or REGISTRY.datasets
// ETA/DTAP scores are auto-calculated from fields; manually override in eta/dtap objects

const REGISTRY = {
  "software": [
    {
      "id": "AgEvidence",
      "name": "Ag Evidence",
      "short": "AgEvidence",
      "org": "The Nature Conservancy",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "animals",
        "water",
        "climate"
      ],
      "modelClass": [
        "literature aggregation",
        "data visualization"
      ],
      "outputs": "crop productivity,GHG emissions,soil carbon,pest management,soil properties,erosion,N cycling and losses",
      "desc": "AgEvidence shows how agricultural management can affect the environment and the production of food. It provides easy access to this research without having to comb through scientific papers. It contains more than 39,000 data points visualizing the impact of regenerative agriculture.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.agevidence.org/",
      "docs": "https://doi.org/10.5063/F1W37TQJ",
      "metadata": "https://doi.org/10.5063/F1W37TQJ",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Lesley W Atwood; Stephen A Wood",
      "email": "lesley.atwood@tnc.org; stephen.wood@tnc.org",
      "geography": "Illinois,Indiana,Iowa,Kansas,Michigan,Minnesota,Missouri,North Dakota,Nebraska,Ohio,South Dakota,Wisconsin",
      "spatialGrain": "Various",
      "extent": "Regional",
      "updated": "1-May-20",
      "version": "Unknown",
      "public": "Yes",
      "related": "",
      "notes": "Full database of scientific papers in AgEvidence is available at https://doi.org/10.5063/F1W37TQJ",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          4.0,
          1.5,
          4.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "AERO",
      "name": "Aeolian Erosion",
      "short": "AERO",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion",
      "desc": "The USDA ARS developed AERO model to address the need for a generalizable, physically based wind erosion and dust emission model that could be applied to existing standardized monitoring datasets across all land cover types. The need for a generalizable and physically based model arose from recognition that the strengths of available cropland wind erosion models (e.g., WEPS) for assessing management impacts on soil loss do not currently (2018) extend to rangeland applications.",
      "landUse": [
        "Rangeland"
      ],
      "link": "https://dust.swclimatehub.info/3.3",
      "docs": "https://dust.swclimatehub.info/files/Edwards_SWCS_2018.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "bgamboa@nmsu.edu",
      "geography": "",
      "spatialGrain": "State,Field,County",
      "extent": "",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "CEAP,APEX",
      "notes": "https://doi.org/10.1016/j.aeolia.2021.100769",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 50,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          2.0,
          4.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "ACPF",
      "name": "Agricultural Conservation Planning Framework",
      "short": "ACPF",
      "org": "NRCS,USDA ARS,Iowa State University",
      "orgCat": [
        "NRCS",
        "Other USDA",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "water",
        "soil"
      ],
      "modelClass": [
        "geospatial analysis",
        "primary",
        "conservation planning"
      ],
      "outputs": "hydrology",
      "desc": "ACPF is web-based resource supports targeted, strategic conservation planning at the small watershed scale and can be used to identify high-risk areas for targeted conservation and generate suites of site-specific conservation opportunities and associated output maps to inform future conservation efforts. The ACPF Toolbox high-resolution land use, soil and terrain data and generates results that identity a menu of possible locations for a variety of conservation practices within fields, below fields and riparian zones.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://acpf4watersheds.org/",
      "docs": "https://webhosting.cals.wisc.edu/wp-content/uploads/sites/407/2023/05/Agricultural-Conservation-Planning-Toolbox-UsersManual_v5.0.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "acpf@extension.wisc.edu",
      "geography": "Illinois,Iowa,Minnesota,Wisconsin,Kansas,Missouri,Nebraska,North Dakota,Ohio,Portions of Indiana",
      "spatialGrain": "HUC12,Watershed",
      "extent": "Regional",
      "updated": "24-Apr-23",
      "version": "5",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "agricultural field boundaries; land use and field-specific crop rotations; terrain and elevation; NRCS gSSURGO soils data",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "ALMANAC",
      "name": "Agricultural Land Management Alternative with Numerical Assessment Criteria",
      "short": "ALMANAC",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion",
      "desc": "The ALMANAC model simulates crop growth, competition, light interception by leaves, biomass accumulation, partitioning of biomass into grain, water use, nutrient uptake, and growth constraints such as water, temperature, and nutrient stress. It is a decision-making tool with proven parameters and simulations that have been applied to many crop-prediction and natural resource problems and can assist with future crop predictions such as how much biomass will be produced, what plant will be successful where, the optimal time to harvest, the effect of management on competing species, and management adjustment effects on land.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://data.nal.usda.gov/dataset/agricultural-land-management-alternative-numerical-assessment-criteria-almanac-simulation-model",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "James R Kiniry",
      "email": "jim.kiniry@usda.gov",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "13-Apr-16",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "Soil, weather, tillage, and crop parameter are essential inputs for the model. Users typically access the extensive NRCS soils data, and readily available daily weather data, such as NOAA, for inputs.",
      "supplementary": "",
      "eta": {
        "score": 67,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "APEX",
      "name": "Agricultural Policy/Environmental eXtender",
      "short": "APEX",
      "org": "Texas A&M University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion,hydrology,pesticide pollution,soil carbon,GHG emissions,economic analyses,manure management,P cycling and losses,N cycling and losses,soil water",
      "desc": "APEX has components for routing water, sediment, nutrients, and pesticides across complex landscapes and channel systems to the watershed outlet, as well as groundwater and reservoir components. A watershed can be subdivided as much as necessary to ensure that each subarea is relatively homogeneous in terms of soil, land use, management, and weather. APEX was constructed to evaluate various land management strategies considering sustainability, erosion (wind, sheet, channel), economics, water supply and quality, soil quality, plant competition, weather, and pests.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://epicapex.tamu.edu/",
      "docs": "https://epicapex.tamu.edu/manuals-and-publications/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "epicapex@brc.tamus.edu",
      "geography": "",
      "spatialGrain": "Field,Watershed",
      "extent": "",
      "updated": "15-Nov-23",
      "version": "1501",
      "public": "Yes",
      "related": "EPIC",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "APSIM",
      "name": "Agricultural Production Systems Simulator",
      "short": "APSIM",
      "org": "The APSIM Initiative",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion,GHG emissions,soil water,N cycling and losses,P cycling and losses",
      "desc": "This is a comprehensive model developed to simulate biophysical processes in agricultural systems, particularly as related to the economic and ecological outcomes of management practices in the face of climate risk. It is also being used to explore options and solutions for food security, climate change adaptation and mitigation, and carbon-trading problem domains.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.apsim.info/apsim-model/",
      "docs": "https://www.apsim.info/documentation/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "apsim@csiro.au",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "29-Mar-18",
      "version": "7.1",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "AMMP",
      "name": "Alternative Manure Management Program Project Planning Tool",
      "short": "AMMP",
      "org": "California Department of Food and Agriculture",
      "orgCat": [
        "State Government"
      ],
      "type": "software",
      "concerns": [
        "animals",
        "air"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "GHG emissions,manure management",
      "desc": "AMMP was created to assist California dairy and livestock operators in project planning and decision making and in applying for the Alternative Manure Management Program. This web application primarily provides tools for potential applicants to map out their project site\u2019s current practices and proposed alternative manure management practices that the program supports. It also assesses a proposed project\u2019s estimated GHG reductions (following the Alternative Manure Management Program Quantification Methodology and accompanying Benefits Calculator Tool developed by the California Air Resources Board).",
      "landUse": [
        "Farmstead"
      ],
      "link": "https://replan-tool.org/ammp/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Dennis Grossman",
      "email": "Denny.Grossman@sgc.ca.gov; cdfa.oefi_ammp_tech@cdfa.ca.gov",
      "geography": "California",
      "spatialGrain": "Field",
      "extent": "State",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 64,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "AquaCrop",
      "name": "AquaCrop",
      "short": "AquaCrop",
      "org": "FAO",
      "orgCat": [
        "Other Government"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,soil water",
      "desc": "AquaCrop is a crop growth model that the Land and Water Division of the Food and Agriculture Organization of the United Nations developed to address food security and assess the effect of environment and management on crop production. AquaCrop simulates yield response to water of herbaceous crops and is particularly suited to addressing conditions under which water is a key limiting factor in crop production.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.fao.org/aquacrop/en/",
      "docs": "https://www.fao.org/aquacrop/software/aquacropplug-inprogramme/en/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "Aquacrop@fao.org",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "15-Aug-23",
      "version": "7.1",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "AquaCrop uses a relative small number of explicit parameters and largely intuitive input variables that are either widely available or can be determined using simple methods. Inputs consist of weather data, crop and soil characteristics, and management practices that define the environment in which the crop will develop. Soil characteristics are divided into soil profile and groundwater characteristics, and management practices are categorized as field management or irrigation management practices.",
      "supplementary": "https://github.com/KUL-RSDA/AquaCrop/tree/main",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          4.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "AGWA",
      "name": "Automated Geospatial Watershed Assessment",
      "short": "AGWA",
      "org": "USDA ARS,EPA,University of Wyoming",
      "orgCat": [
        "Other USDA",
        "Other Federal Agency",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary",
        "geospatial analysis"
      ],
      "outputs": "hydrology",
      "desc": "The Automated Geospatial Watershed Assessment tool is a GIS interface designed to help manage and analyze watershed water quantity and quality. Accommodating novice to expert GIS users, it is designed for watershed, water resource, land use, and resource managers and scientists investigating the hydrologic impacts of land-cover and land-use change in small watershed to basin-scale studies to use.",
      "landUse": [],
      "link": "https://www.epa.gov/water-research/automated-geospatial-watershed-assessment-agwa-tool#software",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "https://www.tucson.ars.ag.gov/agwa/contact/",
      "geography": "",
      "spatialGrain": "Watershed",
      "extent": "",
      "updated": "1-Nov-20",
      "version": "3.10.0",
      "public": "Yes",
      "related": "",
      "notes": "AGWA includes modern of implementation of KINEROS model (created by USDA-ARS in Tuscon, AZ; https://www.tucson.ars.ag.gov/kineros/)",
      "inputs": "",
      "supplementary": "https://www.tucson.ars.ag.gov/agwa/",
      "eta": {
        "score": 71,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "BehavePlus",
      "name": "BehavePlus Fire Modeling System",
      "short": "BehavePlus",
      "org": "US Forest Service",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "fire behavior",
      "desc": "The BehavePlus fire modeling system is based on mathematical models that describe wildland fire behavior and effects and the fire environment. It is a flexible system that produces tables, graphs, and simple diagrams and can be used for a host of fire management applications, including projecting the behavior of an ongoing fire, planning prescribed fires, assessing fuel hazard, and training.",
      "landUse": [
        "Forest"
      ],
      "link": "https://www.frames.gov/behaveplus/home",
      "docs": "https://www.frames.gov/behaveplus/software-manuals",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Faith Ann Heinsch",
      "email": "faith.heinsch@usda.gov",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "26-Mar-18",
      "version": "6.0.0",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "BAW",
      "name": "Buffering America's Waterways Tool",
      "short": "BAW",
      "org": "NRCS,USFS",
      "orgCat": [
        "NRCS",
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "water",
        "plants"
      ],
      "modelClass": [
        "data visualization",
        "geospatial analysis"
      ],
      "outputs": "water quality,land use/cover",
      "desc": "The USFS partnered with the NRCS to create the Buffering America\u2019s Waterways Tool, which identifies watersheds across the country where there is the greatest opportunity to enhance surface drinking water quality by establishing trees, shrubs, and other perennial vegetation in riparian areas.",
      "landUse": [
        "Cropland",
        "Forest",
        "Other"
      ],
      "link": "https://storymaps.arcgis.com/collections/a6154d9b5b7149eda95500414fa3cadf?item=1",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Rebecca Lilja",
      "email": "rebecca.l.lilja@usda.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "Watershed",
      "extent": "National",
      "updated": "",
      "version": "Unknown",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 64,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CaRPE",
      "name": "Carbon Reduction Potential Evaluation",
      "short": "CaRPE",
      "org": "American Farmland Trust",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "climate"
      ],
      "modelClass": [
        "meta-modelling output",
        "model wrapper",
        "data visualization"
      ],
      "outputs": "GHG emissions,soil carbon",
      "desc": "The Carbon Reduction Potential Evaluation Tool is an interactive web-based tool that allows users to visualize and quantify GHG emission reductions resulting from implementation of a suite of cropland and grazing land management practices. It expands the utility of the data reported by COMET-Planner by layering cropland and grazing land acres data from the 2017 Census of Agriculture.",
      "landUse": [
        "Cropland",
        "Pasture",
        "Rangeland"
      ],
      "link": "https://farmland.org/project/the-carpe-tool/",
      "docs": "https://carpe.shinyapps.io/CarpeTool/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Jennifer Moore; Daniel Manter",
      "email": "jennifer.moore@usda.gov; daniel.manter@usda.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "County",
      "extent": "National",
      "updated": "11-Aug-22",
      "version": "2.0.6",
      "public": "Yes",
      "related": "COMET Planner",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CCBI",
      "name": "CEAP Conservation Benefits Indicator",
      "short": "CCBI",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "soil",
        "water"
      ],
      "modelClass": [
        "meta-modelling output",
        "conservation planning"
      ],
      "outputs": "erosion",
      "desc": "The CCBI is a field-level tool used to rank conservation needs within a given geographic region. It uses soil vulnerability and conservation treatment histories of cultivated farm fields and prioritizes them into one of four categories that NRCS uses to prioritize allocation of future conservation resources. Priority 1 indicates the greatest conservation need and Priority 4 the least. CCBI field-level rulesets rely on the SVI for Cultivated Cropland (SVI-cc), NRCS conservation treatment histories, and CEAP modeled relationship between soil vulnerability and conservation treatment needed to control nutrient, sediment, and pathogen loss from farm fields.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://directives.sc.egov.usda.gov/47389.wba",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Chieh (Peter) Chen",
      "email": "chieh.chen@usda.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "15-Oct-21",
      "version": "1",
      "public": "No",
      "related": "",
      "notes": "Currently in review by agency scientists, as far as we know, not available for planners to use yet.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 49,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WQBE",
      "name": "CEAP Water Quality Benefits Estimator",
      "short": "WQBE",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "geospatial analysis",
        "meta-modelling output",
        "conservation planning"
      ],
      "outputs": "water quality,hydrology",
      "desc": "The WQBE tool integrates NRCS and FSA databases with field-level and watershed-scale models to estimate water-quality outcomes of adoption of NRCS-specific conservation practices on cultivated cropland acres.",
      "landUse": [
        "Cropland"
      ],
      "link": "",
      "docs": "https://directives.sc.egov.usda.gov/ViewerFS.aspx?hid=48559",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Field,Watershed,HUC8",
      "extent": "",
      "updated": "23-Aug-22",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 38,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "CAST",
      "name": "Chesapeake Assessment Scenario Tool",
      "short": "CAST",
      "org": "Chesapeake Bay Program",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion,N cycling and losses,P cycling and losses",
      "desc": "The Chesapeake Assessment Scenario Tool is a web-based nitrogen, phosphorus, and sediment load estimator tool that streamlines environmental planning. Users specify a geographic area and then select best management practices to apply in that area. The tool builds the scenario and estimates nitrogen, phosphorus, and sediment load reductions. The cost of a scenario is also provided so that users can select the most cost-effective practices to reduce pollutant loads.",
      "landUse": [
        "Cropland",
        "Farmstead",
        "Other"
      ],
      "link": "",
      "docs": "https://cast.chesapeakebay.net/Documentation/ModelDocumentation",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "Regional",
      "updated": "",
      "version": "CAST-23",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 58,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "COMET_Farm",
      "name": "COMET Farm",
      "short": "COMET Farm",
      "org": "NRCS,Colorado State University",
      "orgCat": [
        "NRCS",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "animals",
        "climate",
        "air"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,GHG emissions,N cycling and losses,soil carbon",
      "desc": "COMET-Farm is a whole-farm and -ranch carbon and GHG accounting system that guides users through describing farm and ranch management practices including alternative future management scenarios. Once the description is complete, a report is generated comparing carbon changes and GHG emissions of current management practices with those of future scenarios. COMET-Farm allows for a flexible, field-specific conservation scenario analysis because users enter specific management details to their up-to-20-year baseline.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture",
        "Forest"
      ],
      "link": "https://comet-farm.com/",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://comet-farm.com/home/apiview",
      "contact": "",
      "email": "appnrel@colostate.edu",
      "geography": "48 conterminous states,Hawaii",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "16-May-23",
      "version": "4.1",
      "public": "Yes",
      "related": "DAYCENT",
      "notes": "",
      "inputs": "",
      "supplementary": "https://comet-farm.com/HelpPage",
      "eta": {
        "score": 82,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          4.5,
          5,
          2.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": []
      }
    },
    {
      "id": "COMET_Planner",
      "name": "COMET Planner",
      "short": "COMET Planner",
      "org": "NRCS,Colorado State University",
      "orgCat": [
        "NRCS",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "animals",
        "climate",
        "air"
      ],
      "modelClass": [
        "meta-modelling output"
      ],
      "outputs": "GHG emissions,soil carbon",
      "desc": "COMET-Planner provides landowners and conservation planners with an easy-to-use web-based tool to evaluate potential carbon sequestration and GHG reductions that can be gained from adopting NRCS conservation practices. It provides generalized estimates of the GHG and carbon sequestration benefits of conservation practices and is intended for initial conservation planning purposes.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture"
      ],
      "link": "http://www.comet-planner.com/",
      "docs": "https://storage.googleapis.com/comet_public_directory/planner50states/pdfs/COMET-PlannerReport.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "appnrel@colostate.edu",
      "geography": "48 conterminous states",
      "spatialGrain": "County",
      "extent": "National",
      "updated": "15-Sep-22",
      "version": "3",
      "public": "Yes",
      "related": "COMET Farm",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CART",
      "name": "Conservation Assessment Ranking Tool",
      "short": "CART",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [
        "expert synthesis",
        "geospatial analysis",
        "conservation planning"
      ],
      "outputs": "",
      "desc": "CART assesses resource concerns, planned practices, and site vulnerability and evaluates the benefits of site-specific management for treating resource concerns, including program-neutral assessment with an integrated, efficient ranking tool to facilitate conservation delivery.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture",
        "Forest",
        "Farmstead",
        "Associated Ag Land",
        "Other"
      ],
      "link": "https://the-conservation-assessment-ranking-tool-nrcs.hub.arcgis.com/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Aaron Lauster",
      "email": "aaron.lauster@usda.gov",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "",
      "notes": "https://jneme910.github.io/CART/",
      "inputs": "",
      "supplementary": "https://www.nationalconservationplanningpartnership.com/wp-content/uploads/2019/10/NCPP-Briefer-CART-Update-1.pdf",
      "eta": {
        "score": 46,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          3.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CD",
      "name": "Conservation Desktop",
      "short": "CD",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [
        "geospatial analysis",
        "data visualization",
        "conservation planning"
      ],
      "outputs": "",
      "desc": "CD integrates NRCS technical and financial information and processes into a common user interface and provides streamlined financial assistance information regarding conservation programs to NRCS staff and an accessible set of information regarding conservation programs to the public.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture",
        "Forest",
        "Farmstead",
        "Associated Ag Land",
        "Other"
      ],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "Very limited information available online.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 23,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "Access restricted or proprietary"
        ]
      }
    },
    {
      "id": "CORE",
      "name": "Conservation Outcomes Research Explorer",
      "short": "CORE",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil"
      ],
      "modelClass": [
        "literature aggregation",
        "data visualization"
      ],
      "outputs": "erosion,crop productivity,livestock productivity",
      "desc": "The Conservation Outcomes Research Explorer is a literature database that contains research related to grazing and conservation practices that focuses on impacts that those practices have on resource concerns such as erosion and plant health. Users can explore all the data from the studies in the interactive user interface and access direct links to the studies.",
      "landUse": [
        "Rangeland"
      ],
      "link": "https://hub.arcgis.com/pages/3c2c44f511d1434983ff8cb28015b9c7",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "US West",
      "spatialGrain": "Various",
      "extent": "Regional",
      "updated": "",
      "version": "Not released yet",
      "public": "NA",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 34,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "CPDES",
      "name": "Conservation Practice Data Entry System",
      "short": "CPDES",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy",
        "human"
      ],
      "modelClass": [
        "expert synthesis",
        "data storage"
      ],
      "outputs": "",
      "desc": "The Conservation Practice Data Entry System is a web application used to develop, maintain, and select for use practice standards, enhancements, and easement and activity practices. It also develops and maintains information about NRCS resource concerns, practice purposes, and their association with resource concerns and practice points required CART.",
      "landUse": [],
      "link": "https://cpdes.sc.egov.usda.gov/",
      "docs": "https://cpdes.sc.egov.usda.gov/assets/CPDES_User_Guide.pdf",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states,Alaska,Hawaii,US territories",
      "spatialGrain": "State",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Partially",
      "related": "",
      "notes": "How is this relevant to conservation benefits?",
      "inputs": "NA",
      "supplementary": "",
      "eta": {
        "score": 57,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          4.0,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CPPE",
      "name": "Conservation Practice Physical Effects",
      "short": "CPPE",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [
        "expert synthesis",
        "conservation planning"
      ],
      "outputs": "",
      "desc": "CPPE provides planning tools that describe the environmental and economic effects of conservation practices, including impacts on SWAPAE+H, definitions of conservation practices, practice units, typical land use, and a relative cost estimate.",
      "landUse": [],
      "link": "https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-practice-physical-effects",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Lakeitha Ruffin",
      "email": "lakeitha.ruffin@usda.gov",
      "geography": "NA",
      "spatialGrain": "",
      "extent": "National",
      "updated": "",
      "version": "FY23",
      "public": "Yes",
      "related": "RMS",
      "notes": "",
      "inputs": "NRCS Practice Code",
      "supplementary": "",
      "eta": {
        "score": 67,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          2.0,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CoolFarm",
      "name": "Cool Farm Tool",
      "short": "CoolFarm",
      "org": "Cool Farm Alliance",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "climate",
        "plants",
        "animals",
        "energy",
        "air",
        "water",
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "GHG emissions,energy efficiency,soil carbon,N cycling and losses,biodiversity",
      "desc": "The Cool Farm Tool calculates the GHG emissions and carbon footprint of a farm based on harvested yield and marketable yield product weights, growing area, fertilizer applications (type and rate), number of pesticide applications, energy use (electricity and fuel), and if applicable, transport (mode, weight of product, distance). For farms with livestock, calculations are built from herd size, manure management, feed, and energy use. It includes a biodiversity metric that quantifies how well farm management supports biodiversity and water use metrics to determine crop irrigation requirements and assess blue and green water footprints. The Cool Farm Tool covers virtually all crops and livestock globally, except crops grown in nonsoil media (e.g. greenhouses, hydroponics).",
      "landUse": [
        "Cropland",
        "Pasture",
        "Rangeland"
      ],
      "link": "https://coolfarm.org/",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "app.coolfarmtool.org\u202fat the end of the help ? page",
      "contact": "",
      "email": "support@coolfarmtool.org",
      "geography": "",
      "spatialGrain": "Field,Farm",
      "extent": "Global",
      "updated": "15-Nov-23",
      "version": "2.8.0",
      "public": "Yes",
      "related": "",
      "notes": "Issuing of an API app key requires membership with the Cool Farm Alliance.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 81,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          4.5,
          4.5,
          2.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": []
      }
    },
    {
      "id": "CC_SpeciesMW",
      "name": "Cover Crop Decision Tool",
      "short": "CC SpeciesMW",
      "org": "Midwest Cover Crops Council",
      "orgCat": [
        "Academia",
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "decision support",
        "species selection"
      ],
      "outputs": "",
      "desc": "The Cover Crop Decision Tool assists growers to select appropriate cover crop species based on geographic location, goal of cover crop adoption, and cash crop rotation.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://covercroptool.midwestcovercrops.org/covercroptool/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "US MidWest",
      "spatialGrain": "Field",
      "extent": "Regional",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 54,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CC_EconNRCS",
      "name": "Cover Crop Economics Tool",
      "short": "CC EconNRCS",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "human"
      ],
      "modelClass": [
        "decision support"
      ],
      "outputs": "economic analyses",
      "desc": "The Cover Crop Economics Tool is a user-friendly tool to assess the costs and benefits of incorporating cover crops into a crop rotation. It assesses short- and long-term expected costs and benefits.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.nrcs.usda.gov/resources/guides-and-instructions/iowa-nrcs-cover-crop-economics",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Alan Lauver; Lauren Cartwright; Bryon Kirwan",
      "email": "alan.lauver@ia.usda.gov; lauren.cartwright@usda.gov; bryon.kirwan@usda.gov",
      "geography": "Iowa",
      "spatialGrain": "Field",
      "extent": "State",
      "updated": "16-Jan-18",
      "version": "3.1",
      "public": "Yes",
      "related": "",
      "notes": "This tool is applicable nationally, but the only version that is publicly available is pre-filled with data relevant for Iowa.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 70,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CC_SpeciesNE",
      "name": "Cover Crop Species Selector",
      "short": "CC SpeciesNE",
      "org": "Northeast Cover Crops Council",
      "orgCat": [
        "Academia",
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "decision support",
        "species selection"
      ],
      "outputs": "",
      "desc": "This tool is a result of a design collaboration between the Agricultural Informatics Lab, the Precision Sustainable Agriculture team, the Northeast Cover Crops Council, and USDA. The data featured in this tool are based on expert opinion and represent the collective knowledge and experience of cover crop experts in the Northeast United States. Experts, grouped according to USDA hardiness zone, evaluated each cover crop property in the dataset via deliberative discussions in more than 70 teleconferences.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://covercrop-selector.org/",
      "docs": "https://covercrop-selector.org/about",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "AgInformatics Lab; Victoria Ackroyd",
      "email": "aginformaticslab@gmail.com; vackroyd@umd.edu",
      "geography": "US Northeast,US Southeast",
      "spatialGrain": "Field",
      "extent": "Regional",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CC_Analyze",
      "name": "Cover Crops Analyzer",
      "short": "CC Analyze",
      "org": "University of Illinois",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "climate",
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity",
      "desc": "The Cover Crop Analyzer provides farmers with a practical web-based decision support tool designed to help manage cover crops in their fields. The project uses existing research to demonstrate the potential for cover crops and provides useful information for decision making and management of this practice. It will also seek to apply future research on cover crops as results are incorporated into updates and new iterations of the tool.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://covercrop.ncsa.illinois.edu/",
      "docs": "https://opensource.ncsa.illinois.edu/confluence/display/CCrop/Cover+Crop+Project",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Chris Navarro",
      "email": "cmnavarr@illinois.edu",
      "geography": "Illinois,Indiana",
      "spatialGrain": "Field",
      "extent": "Regional",
      "updated": "",
      "version": "1.9.0",
      "public": "Yes",
      "related": "DSSAT",
      "notes": "Could not find information on date of most recent version.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          4.0,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CC_EconISA",
      "name": "Cover Crops Economics Simulator",
      "short": "CC EconISA",
      "org": "Iowa Soybean Association",
      "orgCat": [
        "Private Industry"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "This tool suggests strategies to make cover crops effective in a farmer\u2019s operation. It is designed for farmers, landlords, and members of the public interested in the environmental and economic outcomes of cover crops.",
      "landUse": [],
      "link": "https://analytics.iasoybeans.com/cool-apps/CoverCropEconSimulator/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Peter Kyveryga; Suzanne Fey",
      "email": "pkyveryga@iasoybeans.com; sfey@iasoybeans.com",
      "geography": "Iowa",
      "spatialGrain": "Field",
      "extent": "State",
      "updated": "8-May-23",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 67,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CQESTR",
      "name": "CQESTR",
      "short": "CQESTR",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "soil carbon",
      "desc": "The CQESTR model is a process-based soil C balance model that computes biological decomposition rates of crop residue or organic amendments as they convert to soil organic matter (SOM) or SOC. The model is used for the field scale evaluation of SOC stocks.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.ars.usda.gov/pacific-west-area/pendleton/columbia-plateau-conservation-research-center/docs/cqestr/",
      "docs": "https://doi.org/10.2136/sssaj2007.0154",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "2",
      "public": "Unknown",
      "related": "",
      "notes": "",
      "inputs": "Data inputs include weather, above-ground and below-ground biomass additions, N content of residues and amendments, soil properties, and management factors such as tillage and crop rotation. Crop rotation, annual yields, and tillage information are organized in crop management files associated with the c-factor of the Revised Universal Soil Loss Equation (RUSLE, version 1).",
      "supplementary": "",
      "eta": {
        "score": 47,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CropSyst",
      "name": "CropSyst",
      "short": "CropSyst",
      "org": "Washington State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion,GHG emissions,soil water,soil carbon,N cycling and losses",
      "desc": "CropSyst is a is a user-friendly, conceptually simple but sound multi-year multi-crop daily time-step simulation model that has been developed as an analytic tool to study the effect of cropping system management on productivity and the environment. It simulates the soil water budget, soil-plant nitrogen budget, crop canopy and root growth, dry matter, yield, residue and decomposition, and erosion. Management options include cultivar selection, crop rotation (including fallow years), irrigation, nitrogen fertilization, tillage operations (>80 options), and residue management.",
      "landUse": [
        "Cropland"
      ],
      "link": "http://sites.bsyse.wsu.edu/CS_Suite_4/CropSyst/index.html",
      "docs": "http://sites.bsyse.wsu.edu/CS_Suite_4/CropSyst/manual/index.html",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "rnelson@mail.wsu.edu",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "18-Apr-19",
      "version": "4-2019_04-18",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "CYCLES",
      "name": "CYCLES",
      "short": "CYCLES",
      "org": "Penn State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion,GHG emissions,soil carbon,N cycling and losses",
      "desc": "CYCLES is a daily time-step agroecosystem model that simulates the biophysical processes and management practices occurring within cropping systems and other land uses. Processes include fluxes in the water and energy balance, the coupled cycling of carbon and nitrogen, and plant growth. The model can simulate a wide range of agricultural management practices such as tillage, organic and inorganic nutrient additions, annual and perennial crops, crop harvests as grain or forage, polycultures and relay cropping, grazing, and irrigation. Crop growth is represented with a generalizable framework such that the user can specify a nearly limitless variety of agricultural crop species.",
      "landUse": [
        "Cropland",
        "Pasture"
      ],
      "link": "https://plantscience.psu.edu/research/labs/kemanian/models-and-tools/cycles",
      "docs": "https://psumodeling.github.io/Cycles/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Armen Kemenian; Yuning Shi",
      "email": "https://github.com/PSUmodeling/Cycles/issues",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "16-May-23",
      "version": "1.2.1",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "DairyPrint",
      "name": "DairyPrint",
      "short": "DairyPrint",
      "org": "University of Wisconsin",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "animals",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "GHG emissions",
      "desc": "DairyPrint is a user-friendly tool designed to estimate GHG emissions from dairy farming. The model integrates herd dynamics, manure management, crop, and feed costs considerations, simplifying the estimation process while providing comprehensive insights. The herd module simulates monthly herd dynamics based on inputs as total cows, calving interval, and culling rate, outputting average annual demographics and estimating various animal related variables (i.e., dry matter intake, milk yield, manure excretion, and enteric CH4 emissions). These outputs feed into other modules, such as the manure module, which calculates emissions based on manure, weather data, and facility type. The manure module processes manure according to farm practices, and the crop module accounts for GHG emissions from manure, fertilizers, and limestone application, also estimating nutrient balances.",
      "landUse": [
        "Pasture"
      ],
      "link": "https://dairymgt.cals.wisc.edu/tools/DairyPrintModel/index.php",
      "docs": "https://dairymgt.cals.wisc.edu/publications/extension_publications/DairyPrint2.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Victor E. Cabrera",
      "email": "vcabrera@wisc.edu",
      "geography": "",
      "spatialGrain": "Farm",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "Daycent",
      "name": "Daycent",
      "short": "Daycent",
      "org": "Colorado State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,GHG emissions,soil water,soil carbon,N cycling and losses",
      "desc": "DAYCENT is the daily time-step version of the CENTURY biogeochemical model. It simulates fluxes of carbon and nitrogen in the atmosphere, vegetation, and soil and underlies many GHG tools such as COMET and COMET Planner.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture",
        "Forest"
      ],
      "link": "https://www.nrel.colostate.edu/projects/daycent",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "1-Jan-15",
      "version": "4.5",
      "public": "Yes",
      "related": "",
      "notes": "Download here? https://www.nrel.colostate.edu/assets/nrel_files/projects/daycent/",
      "inputs": "Model inputs are: daily maximum/minimum air temperature and precipitation, surface soil texture class, and land cover/use data (e.g., vegetation type, cultivation/planting schedules, amount and timing of nutrient amendments).",
      "supplementary": "",
      "eta": {
        "score": 59,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          2.5,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "DDSSAT",
      "name": "Decision Support System for Agrotechnology Transfer",
      "short": "DDSSAT",
      "org": "University of Florida,International Fertilizer Development Center,many others",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,GHG emissions,soil water,N cycling and losses,P cycling and losses",
      "desc": "Decision Support System for Agrotechnology Transfer is a software application program that comprises dynamic crop growth simulation models for more than 42 crops. It is supported by a range of utilities and apps for weather, soil, genetics, crop management, and observational experimental data and includes example datasets for all crop models. The crop simulation models simulate growth, development, and yield as a function of soil-plant-atmosphere dynamics. It has been applied to address many real-world problems, including genetic modeling, on-farm and precision management, regional assessments of the impact of climate variability and climate change, economic and environmental sustainability, and food and nutrition security.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://dssat.net/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "https://dssat.net/contact-us/",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "15-Aug-23",
      "version": "4.8.2",
      "public": "Yes",
      "related": "CENTURY",
      "notes": "",
      "inputs": "Because the quality of simulation results depends heavily on the data inputs, DSSAT includes tools to assist modelers in organizing input data for crop management, soils and weather. An especially challenging set of inputs are the genotype-specific parameters (GSPs) used to quantify how one cultivar differs from another. GSPs are most often estimated through calibration to measurements from field trials, and DSSAT provides tools both to organize data used for calibration and to estimate required GSPs.",
      "supplementary": "",
      "eta": {
        "score": 70,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "DNDC",
      "name": "DeNitrification DeComposition Soil Carbon Model",
      "short": "DNDC",
      "org": "University of New Hampshire",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,GHG emissions,soil carbon,N cycling and losses",
      "desc": "DeNitrification-DeComposition is a computer simulation model of carbon and nitrogen biogeochemistry in agro-ecosystems that can be used to predict crop growth, soil temperature and moisture regimes, soil carbon dynamics, nitrogen leaching, and emissions of trace gases, including nitrous oxide, nitric oxide, dinitrogen, ammonia, methane, and carbon dioxide.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.dndc.sr.unh.edu/",
      "docs": "http://www.dndc.sr.unh.edu/model/GuideDNDC95.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "Jia.Deng@unh.edu; dengjia85@gmail.com",
      "geography": "",
      "spatialGrain": "Field,Regional",
      "extent": "",
      "updated": "25-Aug-12",
      "version": "9.5",
      "public": "Yes, non-commercial use",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 70,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "DS_Hub",
      "name": "Dynamic Soils Hub",
      "short": "DS Hub",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [
        "geospatial analysis"
      ],
      "outputs": "soil properties",
      "desc": "DS Hub is an innovative, high-end, geospatial data workbench that builds new data products from a wide variety of existing datasets. It supports quality requests for science-based soil property data incentives programs and soil health programs.",
      "landUse": [],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Sub-field",
      "extent": "National",
      "updated": "",
      "version": "",
      "public": "Not Yet",
      "related": "",
      "notes": "DS Hub has not been publicly released",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 33,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "CC_EconISU",
      "name": "Economics of Cover Crops",
      "short": "CC EconISU",
      "org": "Iowa State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "human"
      ],
      "modelClass": [
        "primary",
        "decision support"
      ],
      "outputs": "economic analyses",
      "desc": "Economics of Cover Crops is a decision tool that provides worksheets to analyze economic costs and benefits of cover crops with and without grazing and harvesting.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.extension.iastate.edu/agdm/crops/html/a1-91.html",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Alejandro Plastina, extension economist and Meghan Filbert, livestock program manager, Practical Farmers of Iowa",
      "email": "agdm@iastate.edu; plastina@iastate.edu; meghan@practicalfarmers.org",
      "geography": "Iowa",
      "spatialGrain": "Field",
      "extent": "State",
      "updated": "15-Mar-18",
      "version": "1.4_70318",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "EcoPractices",
      "name": "EcoPractices",
      "short": "",
      "org": "Sustainable Environmental Consultants",
      "orgCat": [
        "Private Industry"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "EcoPractices is a stand-alone quantification platform for clients managing GHG and ecosystem services markets, which issue GHG and nutrient offset credits to companies seeking to offset or reduce their environmental footprint.",
      "landUse": [],
      "link": "https://sustainableenviro.com/services/environmental-quantification/",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 41,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          3.5,
          2.0,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "Energy_Estimators",
      "name": "Energy Estimators",
      "short": "Energy Estimators",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "energy"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "energy efficiency",
      "desc": "NRCS has developed four tools designed to increase energy awareness in agriculture and help farmers and ranchers identify where they can reduce their energy costs. The results that these tools generate are estimates based on NRCS models and are illustrative of the magnitude of savings. NRCS energy estimators address energy consumption associated with animal housing, irrigation, nitrogen use, and tillage.",
      "landUse": [
        "Cropland",
        "Farmstead"
      ],
      "link": "https://www.nrcs.usda.gov/conservation-basics/natural-resource-concerns/energy",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "NA",
      "spatialGrain": "Farm",
      "extent": "NA",
      "updated": "",
      "version": "2.2.0.623",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 55,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "EDAPT",
      "name": "Enterprise Data Analytics Platform & Toolset",
      "short": "EDAPT",
      "org": "USDA",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "all"
      ],
      "modelClass": [
        "data storage",
        "data access"
      ],
      "outputs": "",
      "desc": "EDAPT is a standardized, centrally available set of tools and connected data sources that enable use of descriptive to advanced predictive and natural language processing. EDAPT offers a single common platform that eliminates technology as a barrier to sharing data and analytics products within and between agencies and integrates data for analysis from more than 150 data sources brought in from every corner of USDA as well as outside external sources.",
      "landUse": [],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "NA",
      "spatialGrain": "NA",
      "extent": "NA",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 22,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.0,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "Access restricted or proprietary"
        ]
      }
    },
    {
      "id": "EnviroAtlas",
      "name": "EnviroAtlas",
      "short": "EnviroAtlas",
      "org": "EPA,USDA,USGS",
      "orgCat": [
        "Other Federal Agency",
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "climate",
        "water",
        "human",
        "animals",
        "air"
      ],
      "modelClass": [
        "data storage",
        "data visualization",
        "data access"
      ],
      "outputs": "crop productivity,livestock productivity,air quality,water quality,erosion,biodiversity,land use/cover",
      "desc": "EnviroAtlas provides geospatial data, easy-to-use tools, and other resources related to ecosystem services, their chemical and non-chemical stressors, and human health.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Forest",
        "Pasture"
      ],
      "link": "https://www.epa.gov/enviroatlas",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "https://ecomments.epa.gov/enviroatlas/",
      "email": "https://www.epa.gov/enviroatlas/forms/contact-us-about-enviroatlas",
      "geography": "48 conterminous states,Alaska,Hawaii,Puerto Rico,Virgin Islands",
      "spatialGrain": "Various",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 64,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "EPIC",
      "name": "Environmental Policy Integrated Climate",
      "short": "EPIC",
      "org": "Texas A&M University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion,pesticide pollution,GHG emissions,N cycling and losses,hydrology,economic analyses",
      "desc": "The Environmental Policy Integrated Climate model is a cropping systems model that was developed to estimate soil productivity as affected by erosion as part of the RCA analysis for 1980, which revealed a significant need for improving technology to evaluate the impacts of soil erosion on soil productivity. It simulates approximately 80 crops with one crop growth model, using unique parameter values for each crop, predicts the effects of management decisions on soil, water, nutrient, and pesticide movements and their combined impact on soil loss, water quality, and crop yields for areas with homogeneous soils and management.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://epicapex.tamu.edu/",
      "docs": "https://epicapex.tamu.edu/manuals-and-publications/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "epicapex@brc.tamus.edu",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "15-Aug-23",
      "version": "1102",
      "public": "Yes",
      "related": "APEX",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "FIRI",
      "name": "Farm Irrigation Rating Index",
      "short": "FIRI",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "water quality,soil water",
      "desc": "The Farm Irrigation Rating Index, a uniform, objective evaluation method for planning irrigation water conservation and identifying ground water and surface water pollution planning, developed at the USDA-NRCS West Technical Center in Portland, OR.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.nrcs.usda.gov/sites/default/files/2023-01/FIRI.xlsm",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Clarence Prestwich",
      "email": "clarence.prestwich@usda.gov",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "12-Feb-19",
      "version": "2018.1",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "Farm-PREP",
      "name": "Farm Phosphorus Reduction Planner",
      "short": "Farm-PREP",
      "org": "Stone Environmental,\"Vermont Agency of Agriculture, Food and Markets\"",
      "orgCat": [
        "State Government",
        "Private Industry"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "The Farm Phosphorus Reduction Planner is an integrated web-based application to help farmers, technical crop consultants, and stakeholders evaluate the impacts of field-level best management practices on phosphorus loss and identify modifications to field operations to achieve water quality improvement targets on the watershed scale.",
      "landUse": [],
      "link": "https://www.farm-prep.net/info/#text-1",
      "docs": "https://www.stone-env.com/assets/resources/6d35ca97df/E_17054-FarmPREP.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Michael Winchell; Barbara Patterson",
      "email": "mwinchell@stone-env.com; bpatterson@stone-env.com",
      "geography": "Vermont",
      "spatialGrain": "Watershed,Field,Farm",
      "extent": "State",
      "updated": "15-Jun-20",
      "version": "Unspecified",
      "public": "No",
      "related": "APEX",
      "notes": "",
      "inputs": "",
      "supplementary": "https://www.lcbp.org/wp-content/uploads/2016/03/97_20200702-FarmPREP_June-2020.pdf",
      "eta": {
        "score": 53,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          2.0,
          4.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "FARM-ES",
      "name": "Farmers Assuring Responsible Management & Environmental Stewardship",
      "short": "FARM-ES",
      "org": "The National Dairy FARM Program",
      "orgCat": [
        "Private Industry"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "The Farmers Assuring Responsible Management and Environmental Stewardship tool estimates GHG emissions and energy intensity using the results of a life-cycle assessment conducted by the Applied Sustainability Center at the University of Arkansas to calculate the total environmental impacts of an entire chain of production. The assessment incorporated data from more than 500 dairy farms across the United States",
      "landUse": [],
      "link": "https://nationaldairyfarm.com/dairy-farm-standards/environmental-stewardship/environmental-stewardship-program-version-3-development/",
      "docs": "https://nationaldairyfarm.com/producer-resources/environment/",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "dairyfarm@nmpf.org",
      "geography": "",
      "spatialGrain": "Farm",
      "extent": "National",
      "updated": "15-Jul-24",
      "version": "3",
      "public": "No",
      "related": "",
      "notes": "Version three of FARM-ES will be based on a simplified version of the RuFaS model.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 53,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          4.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "Fieldprint",
      "name": "Fieldprint Calculator",
      "short": "Fieldprint",
      "org": "Field to Market",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "air",
        "energy",
        "water",
        "animals",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,erosion,GHG emissions,biodiversity",
      "desc": "Field to Market's Fieldprint calculator is an open-access tool that growers can use to evaluate their current operations and adopt climate-smart interventions that increase the sustainability and resilience of their farms. Brands, retailers, and suppliers can access the data to review measured impacts and consider long-run impacts of such practices.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://calculator.fieldtomarket.org/",
      "docs": "https://fieldtomarket.org/our-programs/sustainability-metrics/",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "",
      "contact": "",
      "email": "support@fieldtomarket.org",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "SCI,COMET Planner,WEPP,WEPS,STEP",
      "notes": "Summary text from: https://medium.com/carbon-a-list/refine-and-improve-an-mmrv-market-landscape-for-us-agriculture-8aef1f935a95",
      "inputs": "http://fieldtomarket.org/media/2022/12/Data-Used-in-Fieldprint-Platform-Metrics-for-web-12.19.22.pdf",
      "supplementary": "",
      "eta": {
        "score": 58,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          4.0,
          4.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary"
        ]
      }
    },
    {
      "id": "FMMI",
      "name": "Financial Management Modernization Initiative",
      "short": "FMMI",
      "org": "USDA",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "climate",
        "water",
        "human",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [
        "financial/logistics"
      ],
      "outputs": "",
      "desc": "This is a state-of-the art software package that provides online, real-time transaction capability that affects every USDA agency and staff office.",
      "landUse": [],
      "link": "https://help.nfc.usda.gov/publications/PPSO/51826.htm",
      "docs": "https://nfc.usda.gov/FSS/Publications/FMS/HelpfulYearRound/CorporateLockbox.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "SM.FMS.Collections@usda.gov",
      "geography": "NA",
      "spatialGrain": "NA",
      "extent": "NA",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 47,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "FINPACK",
      "name": "Financial Software for Agricultural and Farm Management",
      "short": "FINPACK",
      "org": "University of Minnesota",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "human"
      ],
      "modelClass": [
        "data storage",
        "data visualization",
        "decision support"
      ],
      "outputs": "economic analyses",
      "desc": "FINPACK, a farm and agricultural management, financial, and accounting software, helps producers, lenders, and agricultural professionals evaluate a farm's financial position, explore alternatives, and make informed farm management decisions. In addition to determining the current situation and profitability of farms, the software has a range of planning tools for farmers to explore alternative financial scenarios and strategically position their operations to meet future challenges. Once a user establishes a clear picture of the future farm business, the software will project cash flows, revenues, expenses, debt repayment, and operating credit requirements for any portion of a year or entire years up to 10 years.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://finpack.umn.edu/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "Sales@FINPACK.com",
      "geography": "",
      "spatialGrain": "Farm",
      "extent": "",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "FINBIN",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 45,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          2.0,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "FlamMap",
      "name": "FlamMap",
      "short": "FlamMap",
      "org": "US Forest Service",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "fire behavior",
      "desc": "FlamMap is a fire analysis desktop application that simulates potential fire behavior characteristics (e.g., spread rate, flame length, fireline intensity), fire growth and spread, and conditional burn probabilities under constant environmental conditions. With the inclusion of the FARSITE model, it can compute wildfire growth and behavior for longer periods under heterogeneous conditions of terrain, fuel, moisture, and weather.",
      "landUse": [
        "Forest",
        "Rangeland"
      ],
      "link": "https://www.firelab.org/project/flammap",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "14-Nov-23",
      "version": "6.2",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 58,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "FORE-SCE",
      "name": "FOREcasting SCEnarios of Land-use Change model",
      "short": "FORE-SCE",
      "org": "USGS",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "all"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "land use/cover",
      "desc": "The FOREcasting SCEnarios of Land-use Change model assesses global drivers of land-use change to project how various scenarios will affect landscapes.",
      "landUse": [
        "Cropland",
        "Pasture",
        "Rangeland",
        "Farmstead",
        "Forest"
      ],
      "link": "https://www.usgs.gov/special-topics/land-use-land-cover-modeling/land-cover-modeling-methodology-fore-sce-model",
      "docs": "https://doi.org/10.3390/land10050536",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Terry Sohl",
      "email": "sohl@usgs.gov",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "33 unique scenario combinations are now available for three contiguous regions in the Great Plains, with 11 land-use scenarios and 3 climate variations for each. Combined the projections cover over 1.7 million square kilometers and over 8 million individually modeled cropland parcels.  Data are available for download through ScienceBase.",
      "supplementary": "",
      "eta": {
        "score": 47,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "Grass-Cast",
      "name": "Grassland Productivity Forecast",
      "short": "Grass-Cast",
      "org": "NRCS,USDA ARS,University of Nebraska",
      "orgCat": [
        "NRCS",
        "Other USDA",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "data visualization",
        "data access"
      ],
      "outputs": "crop productivity",
      "desc": "Grass-Cast is a platform that predicts how much grass will be available for livestock to graze during the upcoming summer. It also provides a dataset of past predictions and informs ranchers and other grassland managers whether productivity (pounds per acre) is likely to be above normal, near normal, or below normal in the upcoming growing season relative to the 30+ year history of their local area (individual 6-mile x 6-mile grid cells). It is first published in the spring (typically beginning in late April) and then updated every two weeks with newly observed weather data and therefore becomes more accurate as the growing season unfolds and should be consulted throughout the growing season.",
      "landUse": [
        "Rangeland",
        "Pasture"
      ],
      "link": "https://grasscast.unl.edu/",
      "docs": "https://grasscast.unl.edu/FAQ.aspx",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Dannele Peck",
      "email": "dannele.peck@ars.usda.gov",
      "geography": "US Great Plains,US Southwest",
      "spatialGrain": "County",
      "extent": "Regional",
      "updated": "",
      "version": "",
      "public": "Partially",
      "related": "",
      "notes": "Most of the data underlying Grass-Cast are available, thanks to cooperators\u2019 who gave us permission to share some of their data publicly. Datasets for which we have permissions to share are available through USDA\u2019s Ag Data Commons: https://data.nal.usda.gov/dataset/grass-cast-database-data-aboveground-net-primary-productivity-anpp-climate-data-ndvi-and-cattle-weight-gain-western-us-rangelands/resource/87d899d5-c103-4485-a8db-068327805ef6.",
      "inputs": "Grass-Cast uses over 30 years of historical or simulated data (1982-present) about daily weather, evapotranspiration, NDVI (a remotely sensed greenness index), and above-ground net primary productivity (ANPP, a measure of peak plant biomass).",
      "supplementary": "",
      "eta": {
        "score": 67,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          4.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "GREET",
      "name": "Greenhouse gases, Regulated Emissions, and Energy use in Technologies Model",
      "short": "GREET",
      "org": "DOE",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "energy",
        "air"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "GHG emissions,energy efficiency,air quality",
      "desc": "The Greenhouse Gases, Regulated Emissions, and Energy Use in Transportation model examines the life-cycle impacts of vehicle technologies, fuels, products, and energy systems and provides a transparent platform through which energy and vehicle producers, researchers, and regulators can evaluate energy and environmental effects of vehicle technologies and energy and product systems. For any given energy and vehicle system, the model can calculate total energy consumption (non-renewable and renewable), emissions of air pollutants and GHGs, and water consumption.",
      "landUse": [
        "Farmstead"
      ],
      "link": "https://greet.anl.gov/index.php?content=greetdotnet",
      "docs": "https://greet.anl.gov/publications",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "greet@anl.gov",
      "geography": "",
      "spatialGrain": "Farm,County",
      "extent": "",
      "updated": "9-Oct-23",
      "version": "v1.3.0.14xxx",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "HAWQS",
      "name": "Hydrologic and Water Quality System",
      "short": "HAWQS",
      "org": "EPA,Texas A&M University",
      "orgCat": [
        "Other Federal Agency",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "hydrology,water quality",
      "desc": "The Hydrologic and Water Quality System is a web-based interactive water quantity and water quality modeling system that assists states, local governments, and others with water quality protection decision-making. It employs as its core modeling engine the Soil and Water Assessment Tool, an internationally recognized public domain model.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.epa.gov/waterdata/hawqs-hydrologic-and-water-quality-system",
      "docs": "https://hawqs.tamu.edu/#/help",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "hawqs@epa.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "HUC8,HUC10,HUC12,Watershed,HUC14",
      "extent": "National",
      "updated": "15-Jan-23",
      "version": "2",
      "public": "Yes",
      "related": "SWAT",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "IET",
      "name": "Integrated Erosion Tool",
      "short": "IET",
      "org": "NRCS,Colorado State University",
      "orgCat": [],
      "type": "software",
      "concerns": [
        "water",
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion",
      "desc": "The Integrated Erosion Tool (IET) combines the current NRCS wind and water erosion prediction technologies (WEPS and WEPP) into a single interface within Customer Service Toolkit and works as a plug-in to ArcGIS. The IET is unique by combining wind and water erosion into one interface, and utilizing databases housed within the Land Management Operations Database (LMOD). Through the use of LMOD, a user will no longer need to manage databases for the erosion prediction tools. LMOD is the agency\u2019s single authoritative database for erosion prediction databases.",
      "landUse": [],
      "link": "https://www.wactd.org/resources/planning-tools-and-templates/soil-assessment-tools",
      "docs": "https://proceedings.esri.com/library/userconf/swuc18/papers/swuc-26.pdf",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "24-Feb-18",
      "version": "1.42.0.4",
      "public": "Yes",
      "related": "WEPS,WEPP",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 63,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "IFSM",
      "name": "Integrated Farm System Model",
      "short": "IFSM",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "animals",
        "human"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,livestock productivity,GHG emissions,economic analyses,N cycling and losses,P cycling and losses,manure management,energy efficiency",
      "desc": "The Integrated Farm System Model simulates all major farm components on a process level. It includes alfalfa, grass, corn, small grain, and soybean modules. Crop simulation is linked to establishment, harvest, storage, animal use, and economic routines. Simulations predict performance, economics, and environmental impacts of farms over many years of daily weather.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.ars.usda.gov/northeast-area/up-pa/pswmru/docs/integrated-farm-system-model/",
      "docs": "https://www.ars.usda.gov/ARSUserFiles/80700500/Reference%20Manual.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Al Rotz",
      "email": "al.rotz@usda.gov",
      "geography": "",
      "spatialGrain": "Farm",
      "extent": "National",
      "updated": "15-Feb-22",
      "version": "4.7",
      "public": "Yes",
      "related": "DAYCENT",
      "notes": "",
      "inputs": "Input information is supplied to the program through three parameter files. The farm parameter file contains data describing the farm such as crop areas, soil type, equipment and structures used, numbers of animals at various ages, harvest, tillage, and manure handling strategies, and prices for various farm inputs and outputs. The machinery file includes parameters for each machine available for use on a simulated farm. These parameters include machine size, initial cost, operating parameters, and repair factors. The weather file contains daily\nweather data for many years at a particular location. The daily data include the date, incident solar radiation, maximum and minimum temperatures, and precipitation.",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "ILPT",
      "name": "Integrated Landscape Planning Toolbox",
      "short": "ILPT",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [
        "geospatial analysis"
      ],
      "outputs": "",
      "desc": "The Integrated Landscape Planning Toolbox is a SharePoint-based centralized toolbox for NRCS staff to access reports and web applications for reporting accomplishments and planning future conservation investments. Although some individual resources are public facing, the toolbox as a whole is available for official NRCS staff use only.",
      "landUse": [],
      "link": "https://directives.sc.egov.usda.gov/viewerFS.aspx?hid=49241",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Peter Chen",
      "email": "peter.chen@usda.gov",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "County,State,Field,Watershed",
      "extent": "National",
      "updated": "",
      "version": "Various, by application",
      "public": "Partially",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 63,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          2.0,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "LandPKS",
      "name": "Land Potential Knowledge System",
      "short": "LandPKS",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [
        "mobile app",
        "data collection",
        "data storage"
      ],
      "outputs": "soil properties,land use/cover",
      "desc": "Land Potential Knowledge System tools allow users to learn about the land and produce site-specific data at any location in the world. Land potential is defined as the inherent, long-term potential of the land to sustainably generate ecosystem services. Land potential at any location depends on the type of soil, topography, and climate.",
      "landUse": [],
      "link": "https://landpotential.org/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "https://landpotential.org/about/contact/",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "14-Dec-22",
      "version": "3.7.9",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "LUCID",
      "name": "Land Use and Cover Inventory Database",
      "short": "LUCID",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "soil",
        "water"
      ],
      "modelClass": [
        "data access",
        "data visualization"
      ],
      "outputs": "erosion,land use/cover",
      "desc": "Through the Land Use and Cover Inventory Database, users outside of USDA can create custom estimates of NRI data. The database includes NRI data for 1982, 1987, 1992, 1997, and 2000 to 2017. Data may be searched using an interactive menu to produce estimated values for a single year or a combination of years. Searches may be filtered by geographic area at the state or county level for a number of variables (e.g., land cover or use, conservation practice, urbanization, irrigation, erosion, grazing lands, wetlands) in terms of area in acres or related erosion characteristics.",
      "landUse": [],
      "link": "https://www.nrisurvey.org/lucid/",
      "docs": "https://www.nrcs.usda.gov/sites/default/files/2023-10/LUCID-UserGuide-October2023.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "NRI@usda.gov; lucid-support@iastate.edu",
      "geography": "Puerto Rico,Virgin Islands,48 conterminous states,Hawaii",
      "spatialGrain": "County,State",
      "extent": "National",
      "updated": "15-Oct-23",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 71,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "MMP",
      "name": "Manure Management Planner",
      "short": "MMP",
      "org": "NRCS,Purdue University",
      "orgCat": [
        "NRCS",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "animals",
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "manure management,erosion",
      "desc": "Manure Management Planner is a desktop application for creating plans for manure management. In this context, nutrient management planning demonstrates that an animal feeding operation has sufficient crop acreage, seasonal land availability, manure storage capacity, and application equipment to manage the manure produced in an environmentally responsible manner.",
      "landUse": [
        "Pasture",
        "Farmstead"
      ],
      "link": "https://www.purduemmp.myfarms.com/?_ga=2.193274029.1880715635.1699050775-35893763.1699050734",
      "docs": "https://www.purduemmp.myfarms.com/help",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "https://www.purduemmp.myfarms.com/contact",
      "geography": "48 conterminous states",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "1-Aug-22",
      "version": "4.0.3",
      "public": "Yes",
      "related": "SRWQ",
      "notes": "MMP includes state-specific P indices and soil loss data generated by RUSLE2.",
      "inputs": "Three of the most critical inputs for this software are soil test results, manure analyses, and annual manure production estimates.",
      "supplementary": "",
      "eta": {
        "score": 75,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          4.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "MODFLOW",
      "name": "Modular Finite difference Groundwater flow model",
      "short": "MODFLOW",
      "org": "USGS",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "hydrology,water quality",
      "desc": "MODFLOW is a widely used numerical modeling tool for simulating groundwater flow. Although its primary application is groundwater modeling, it can play a crucial role in understanding the interactions between agricultural activities and groundwater resources, including irrigation impacts, nutrient transport modeling, land use change, and effectiveness of conservation practices. MODFLOW 6 contains two types of hydrologic models: the Groundwater Flow Model and the Groundwater Transport Model.",
      "landUse": [],
      "link": "https://www.usgs.gov/software/modflow-6-usgs-modular-hydrologic-model",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Watershed,Point",
      "extent": "",
      "updated": "28-Jun-23",
      "version": "6.4.2",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 58,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "NAQSAT",
      "name": "National Air Quality Site Assessment Tool",
      "short": "NAQSAT",
      "org": "NRCS,Texas A&M University",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "air"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "air quality",
      "desc": "NAQSAT helps livestock and poultry producers determine the areas in their operations where there are opportunities to make changes that reduce air emissions.",
      "landUse": [
        "Farmstead"
      ],
      "link": "https://naqsat.tamu.edu/",
      "docs": "https://naqsat.tamu.edu/docs/user-manual.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "See 'Resources'- 'State Contacts' at https://naqsat.tamu.edu/.",
      "email": "See 'Resources'- 'State Contacts' at https://naqsat.tamu.edu/.",
      "geography": "California,Colorado,Georgia,Indiana,Iowa,Michigan,Minnesota,Nebraska,Oregon,Pennsylvania,Texas",
      "spatialGrain": "Farm",
      "extent": "National",
      "updated": "1-Jan-10",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "Date of most recent update from personal communication with USDA NRCS national staff responsible for air quality.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          4.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "NPAD",
      "name": "National Planning and Agreements Database",
      "short": "NPAD",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy",
        "human"
      ],
      "modelClass": [
        "financial/logistics",
        "data storage"
      ],
      "outputs": "",
      "desc": "This is the official NRCS planning database for documenting and maintaining conservation plan data, technical plans, and practices.",
      "landUse": [],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "Very limited information available online.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 23,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "Access restricted or proprietary"
        ]
      }
    },
    {
      "id": "WC",
      "name": "National Wetland Conservation Tool",
      "short": "WC",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "data storage",
        "geospatial analysis"
      ],
      "outputs": "land use/cover",
      "desc": "The WC Tool was developed to improve the quality, consistency, and timeliness of NRCS certified wetland determinations (CWD) by streamlining the recording and transmittal of CWDs. The Wetland Conservation Tool was developed to improve the quality, consistency, and timeliness of NRCS-certified wetland determinations by streamlining their recording and transmittal. It provides for consistent digitizing and compilation of statewide certified wetland determination layers and assists agency experts in preliminary data gathering and base map development.",
      "landUse": [],
      "link": "https://directives.sc.egov.usda.gov/48358.wba",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Sub-field",
      "extent": "National",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "Unclear if this is the same tool as https://github.com/USDA-NRCS/Wetland-Tools---ArcGIS-Pro",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 34,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "CC_EconHerbicides",
      "name": "Net Returns Calculator for Cover Crops Terminated with Herbicides",
      "short": "CC EconHerbicides",
      "org": "Iowa State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "human"
      ],
      "modelClass": [
        "decision support"
      ],
      "outputs": "economic analyses",
      "desc": "This decision tool is intended to help farmers who do not currently use cover crops evaluate the expected annual net returns to cover crop adoption under alternative scenarios, and to serve as a benchmark for farmers who are already using cover crops and want to improve the return on their investment.\nThis decision tool helps farmers who do not use cover crops evaluate expected annual net returns to cover crop adoption under alternative scenarios and serves as a benchmark for farmers who are already using cover crops and want to improve the return on their investment.  \nPartial budgets show the annual net change in profits resulting from adding cover crops to a corn or soybean rotation. The data were collected through a statewide survey in 2017 and analyzed by a team of economists and agronomists at Iowa State University in close collaboration with Practical Farmers of Iowa.",
      "landUse": [
        "Cropland"
      ],
      "link": "https://www.card.iastate.edu/conservation/economics-of-cover-crops/net-returns-calculator/",
      "docs": "https://docs.lib.purdue.edu/jafe/vol2/iss2/2/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "https://www.card.iastate.edu/about/contact/",
      "geography": "Iowa",
      "spatialGrain": "Agricultural District",
      "extent": "State",
      "updated": "",
      "version": "2017 survey",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 70,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "NETS",
      "name": "NRCS Engineering Tool Suite",
      "short": "NETS",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [
        "conservation planning"
      ],
      "outputs": "",
      "desc": "This suite (formerly Engineering Field Tools) is a framework of engineering tools for field office individuals to plan and design commonly applied conservation practices. There are four applications within the suite: Survey Engineering Tool, Grassed Waterway Design Tool, Terrace Design Tool, and Hydraulic Formulas Tool. These tools not only help planners create designs, but also create reports that can be used as design documentation and final construction drawings to provide to contractors for construction.",
      "landUse": [],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "Unknown",
      "related": "",
      "notes": "Unclear if this is the same as: https://github.com/USDA-NRCS/NRCS-Engineering-Tools---ArcGIS-Pro",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 33,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "NTT",
      "name": "Nutrient Tracking tool",
      "short": "NTT",
      "org": "NRCS,Texas Institute for Applied Environmental Research",
      "orgCat": [
        "Academia",
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "soil",
        "water"
      ],
      "modelClass": [
        "primary",
        "model wrapper"
      ],
      "outputs": "N cycling and losses,P cycling and losses,erosion,GHG emissions,crop productivity",
      "desc": "The Nutrient Tracking Tool is a free, online, user-friendly decision-making tool that quantitatively estimates nitrogen, phosphorus and sediment losses from crop, pasture, and forest lands. It will estimate nutrient (nitrogen and phosphorus) losses, sediment losses, and crop yields for each management scenario and present results in customizable reports. It is built on the APEX model, SSURGO soil data, PRISM climate data, and the Copernicus 30-meter global Digital Elevation Model.",
      "landUse": [],
      "link": "http://ntt-tiaer.cbntt.org/welcomes/new?locale=en",
      "docs": "https://www.epa.gov/sites/default/files/2020-03/documents/1.1.2_selman_ntt_habs_conference.pdf; http://ntt-tiaer.cbntt.org/NTT_Users_Manual_23-10.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Ali Saleh",
      "email": "saleh@tarleton.edu",
      "geography": "48 conterminous states",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "15-Oct-23",
      "version": "23-10",
      "public": "Yes",
      "related": "APEX,SSURGO,PRISM",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "PHYGROW",
      "name": "Phytomass Growth Model",
      "short": "PHYGROW",
      "org": "Texas A&M University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity",
      "desc": "The Phytomass Growth Model models above-ground herb and shrub growth, forage consumption, and hydrologic processes and provides near-real-time assessment of current and future forage conditions. It can model growth dynamics of many plant species competing for limited resources while modeling grazing by herbivores in competition for forage resources. It can determine how variations in landscapes, animal populations (composition, demand, timing) and weather affect carrying capacity, hydrology, and stability of forage production.",
      "landUse": [
        "Rangeland",
        "Pasture"
      ],
      "link": "https://blackland.tamu.edu/models/phygrow/",
      "docs": "http://research.agrilife.org/cnrit/wp-content/uploads/sites/21/2022/04/PHYGROW_user_guide.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Javier Osorio Leyton",
      "email": "javier.osorio@ag.tamu.edu",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "",
      "version": "Unspecified",
      "public": "Upon Request",
      "related": "",
      "notes": "",
      "inputs": "Phygrow requires 4 primary data sources to run: soil, weather, grazers, and plant data. Consequently, due to the lack of available sources for plant parameters, the largest repository for such data is the database link to PHYGROW. For soils, the system was primarily designed to work with data from SSURGO or STATSGO, however, it can use soil data from any source, provided the attributes needed to run the model are supplied.  Grazing information is usually collected in the field by survey crews and entered directly into the model\u2019s parameter database.  Weather data can be pulled from numerous sources.",
      "supplementary": "",
      "eta": {
        "score": 57,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "PLET",
      "name": "Pollution Load Estimation Tool",
      "short": "PLET",
      "org": "EPA",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "soil",
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion,N cycling and losses",
      "desc": "The Pollutant Load Estimation Tool is replacing the Spreadsheet Tool for Estimating Pollutant Loads, using the same underlying formulas but in a more user-friendly web interface. Both tools employ simple algorithms to calculate nutrient and sediment loads from various land uses and load reductions that would result from implementation of various best management practices.",
      "landUse": [],
      "link": "https://www.epa.gov/nps/plet",
      "docs": "https://www.epa.gov/nps/plet#Model%20Documentation",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "plet@tetratech.com",
      "geography": "",
      "spatialGrain": "Watershed,Field",
      "extent": "",
      "updated": "1-Apr-22",
      "version": "1",
      "public": "Yes",
      "related": "STEPL",
      "notes": "",
      "inputs": "12 digit Hydrologic Unit Code (HUC12) to download necessary input data for one or multiple HUCS from Input Data Server",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "ProTracts",
      "name": "ProTracts",
      "short": "ProTracts",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "all"
      ],
      "modelClass": [
        "financial/logistics"
      ],
      "outputs": "",
      "desc": "ProTracts helps manage NRCS conservation program applications, cost-share contracts, and program fund management. It enables funds allocated from the Financial Management Modernization Initiative system to state-controlled subaccounts to be tracked and the applications and contracts associated with those funds to be managed.",
      "landUse": [],
      "link": "https://prohome.nrcs.usda.gov/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "NA",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "6-Jun-22",
      "version": "Unspecified",
      "public": "No",
      "related": "CD",
      "notes": "How is this relevant to conservation benefits?",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 38,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          2.0,
          2.5,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "RHEM",
      "name": "Rangeland Hydrology and Erosion Model and Web Tool",
      "short": "RHEM",
      "org": "NRCS,USDA ARS",
      "orgCat": [
        "NRCS",
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion",
      "desc": "RHEM is designed to provide sound, science-based technology to model and predict runoff and erosion rates on rangelands and to assist in assessing rangeland conservation practice effects. RHEM is a newly conceptualized, process-based erosion-prediction tool specific for rangeland application, based on fundamentals of infiltration, hydrology, plant science, hydraulics, and erosion mechanics. It is a modified and improved version of the WEPP model code specific for rangeland applications.",
      "landUse": [
        "Rangeland"
      ],
      "link": "https://dss.tucson.ars.ag.gov/rhem/",
      "docs": "https://apps.tucson.ars.ag.gov/rhem/docs",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://github.com/ARS-SWRC/rhem_batch_csip",
      "contact": "https://apps.tucson.ars.ag.gov/rhem/contact",
      "email": "gerardo.armendariz@usda.gov",
      "geography": "US West",
      "spatialGrain": "Field",
      "extent": "Regional",
      "updated": "14-Aug-23",
      "version": "2.4 Update 1",
      "public": "Yes",
      "related": "WEPP",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 85,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          4.5,
          5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": []
      }
    },
    {
      "id": "REAP",
      "name": "Regional Environment and Agriculture Programming",
      "short": "REAP",
      "org": "ERS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "software",
      "concerns": [
        "human",
        "plants",
        "animals"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "land use/cover,socio-economic",
      "desc": "The Regional Environment and Agriculture Programming Model is the USDA\u2019s flagship agri-environmental model for estimating local and aggregate changes in land use, environmental indicators, and U.S. agricultural markets. Key to the model is the connection between farm-level decisions of land allocation and the distribution of crop and livestock management practices and their corresponding environmental outcomes. The key aim is to enable the model to evaluate environmental and socio-economic outcomes arising from market- and policy-driven, farmer-level production choices that occur over a diverse and heterogeneous agricultural landscape.",
      "landUse": [],
      "link": "https://ageconsearch.umn.edu/record/335553/files/26804.pdf",
      "docs": "https://www.ers.usda.gov/publications/pub-details/?pubid=47523",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states",
      "spatialGrain": "HUC6",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "APEX,CEAP",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 38,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          2.0,
          3.5,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "Regrow_Ag",
      "name": "Regrow Ag",
      "short": "",
      "org": "Regrow Ag",
      "orgCat": [
        "Private Industry"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "Regrow Ag is a company that designed a platform that contains models and software for sustainability benchmarking, MRV and crop monitoring.",
      "landUse": [],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 22,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.0,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "Access restricted or proprietary"
        ]
      }
    },
    {
      "id": "RMS",
      "name": "Resource Management System Planning Tool",
      "short": "RMS",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [
        "conservation planning",
        "expert synthesis"
      ],
      "outputs": "",
      "desc": "The CPPE matrix was developed to summarize the relative effectiveness of conservation practices in solving natural resource problems. The Resource Management System Planning Tool has used the CPPE as a basis for recommending practices that solve resource problems on various land uses.",
      "landUse": [],
      "link": "https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-practice-physical-effects",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Lakeitha Ruffin",
      "email": "lakeitha.ruffin@usda.gov",
      "geography": "NA",
      "spatialGrain": "NA",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "CPPE",
      "notes": "",
      "inputs": "NRCS resource concerns and practices in consideration for a specific location",
      "supplementary": "",
      "eta": {
        "score": 66,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "RSET",
      "name": "Resource Stewardship Evaluation Tool",
      "short": "RSET",
      "org": "NACD,NRCS",
      "orgCat": [
        "NRCS",
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "plants",
        "soil",
        "water",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [
        "expert synthesis",
        "geospatial analysis",
        "conservation planning"
      ],
      "outputs": "",
      "desc": "The Resource Stewardship Evaluation Tool compares an operation\u2019s attributes and activities with NRCS\u2019s stewardship thresholds for five natural resource concerns (soil management, water quality, water quantity, air quality, wildlife habitat) and provides the results of the evaluation in an easy-to-read, color-coded bar graph that shows how a producer\u2019s management decisions affect the natural resources.",
      "landUse": [],
      "link": "https://www.nacdnet.org/general-resources/resource-stewardship-evaluation-tool/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Laura Demmel",
      "email": "laura-demmel@nacdnet.org",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "CART",
      "notes": "According to personal communication with NRCS CART team, RSET will eventually be superseded by CART.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 46,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          2.0,
          2.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "R-SHEC",
      "name": "Retrospective-Soil Health Economic Calculator Tool",
      "short": "R-SHEC",
      "org": "American Farmland Trust",
      "orgCat": [
        "Private Industry"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The American Farmland Trust designed this tool for a USDA Conservation Innovation Grant project. It can be used to assess the economic costs and benefits of soil health practices adopted on one field, a defined study area comprising a crop rotation occurring across multiple fields where the practices were adopted, or a whole farm operation (that adopted practices across all acres).",
      "landUse": [],
      "link": "https://farmland.org/cig-retrospective-soil-health-economic-calculator/",
      "docs": "https://farmland.org/project/quantifying-economic-and-environmental-benefits-of-soil-health/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Dr. Michelle Perez; Ellen Yeatman",
      "email": "mperez@farmland.org; eyeatman@farmland.org",
      "geography": "",
      "spatialGrain": "Farm",
      "extent": "National",
      "updated": "15-Sep-22",
      "version": "Unspecified",
      "public": "Yes",
      "related": "NTT,COMET Farm,CC EconNRCS",
      "notes": "Version of this tool exists for row crops and almonds.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          4.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "RUSLE2",
      "name": "Revised Universal Soil Loss Equation",
      "short": "RUSLE2",
      "org": "USDA ARS,NRCS",
      "orgCat": [
        "Other USDA",
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion",
      "desc": "RUSLE2 is an advanced, user-friendly software model that predicts long-term, average annual erosion by rainfall. It runs under Windows on desktop computers and can be used for a broad range of farming, conservation, and other agricultural applications. The model containing empirical and process-based science predicts rill and inter-rill erosion by rainfall and runoff. The USDA-ARS is the lead agency for developing the RUSLE2 model.",
      "landUse": [],
      "link": "https://www.nrcs.usda.gov/conservation-basics/conservation-by-state/maryland/revised-universal-soil-loss-equation-version-2",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Susan Lamb; Giulio Ferruzzi",
      "email": "susan.lamb@usda.gov;  giulio.ferruzzi.usda.gov",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "28-Jul-22",
      "version": "2.7.1.13",
      "public": "Yes",
      "related": "CART",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 70,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "ROSETTA",
      "name": "Rosetta pedotransfer model",
      "short": "ROSETTA",
      "org": "USDA ARS,NRCS",
      "orgCat": [
        "Other USDA",
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "soil properties,hydrology",
      "desc": "Rosetta is a pedotransfer model used to predict soil hydraulic parameters that is based on artificial neural network analysis coupled with the bootstrap re-sampling method, which allows van Genuchten water retention parameters, saturated hydraulic conductivity, and their uncertainties to be estimated.",
      "landUse": [],
      "link": "http://ncss-tech.github.io/AQP/soilDB/ROSETTA-API.html",
      "docs": "https://www.ars.usda.gov/pacific-west-area/riverside-ca/agricultural-water-efficiency-and-salinity-research-unit/docs/model/rosetta-model/",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "http://ncss-tech.github.io/AQP/soilDB/ROSETTA-API.html",
      "contact": "Todd Skaggs, Research Leader USDA-ARS",
      "email": "todd.skaggs@usda.gov",
      "geography": "",
      "spatialGrain": "Sub-field",
      "extent": "",
      "updated": "15-Apr-17",
      "version": "Rosetta3",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 84,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          4.5,
          4.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": []
      }
    },
    {
      "id": "RothC",
      "name": "Rothamsted Carbon Model",
      "short": "RothC",
      "org": "Rothamsted Research",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "software",
      "concerns": [
        "soil",
        "climate"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "soil carbon,soil properties",
      "desc": "The Rothamsted Carbon Model was developed and parameterized to model the turnover of organic carbon in arable topsoil from the Rothamsted long-term field experiments. It calculates turnover of organic carbon in non-waterlogged topsoil and allows for the effects of soil type, temperature, soil moisture, and plant cover on the turnover process. It uses a monthly time step to calculate total organic carbon (t ha-1), microbial biomass carbon (t ha-1), and \u039414C.",
      "landUse": [],
      "link": "https://www.rothamsted.ac.uk/rothamsted-carbon-model-rothc",
      "docs": "https://fao-gsp.github.io/GSOCseq/the-rothc-model.html",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Kevin Coleman",
      "email": "kevin.coleman@rothamsted.ac.uk",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "1-Mar-24",
      "version": "multiple",
      "public": "Yes",
      "related": "",
      "notes": "As of March 1, 2024, there are Python and Fortran versions of RothC publicly available. See https://github.com/Rothamsted-Models/",
      "inputs": "monthly rainfall, monthly evaporation, average monthly air temperature, clay content of soil, decomposability of incoming plant material, soil cover, input of plant residues, input of manure, depth of soil layer sampled",
      "supplementary": "",
      "eta": {
        "score": 74,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          4.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "RuFaS",
      "name": "Ruminant Farm Systems Dairy Model",
      "short": "RuFaS",
      "org": "Cornell University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "animals"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "livestock productivity",
      "desc": "This is a whole-farm model that simulates dairy farm production and environmental impact using modern, modular coding and development practices to build a flexible, adaptable, interoperable research and decision-support tool for sustainable ruminant production. It is designed to be open source and available to a wide range of users, including dairy industry professionals, natural resource managers, and researchers",
      "landUse": [
        "Farmstead"
      ],
      "link": "https://www.atkinson.cornell.edu/award/rufas-ruminant-farm-systems-dairy-model-iif-momentum-funding/",
      "docs": "",
      "metadata": "",
      "hasApi": "NA",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Farm",
      "extent": "",
      "updated": "",
      "version": "NA",
      "public": "Not Yet",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 43,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SRWQ",
      "name": "Site Risk for Water Quality",
      "short": "SRWQ",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "model wrapper",
        "geospatial analysis"
      ],
      "outputs": "N cycling and losses,P cycling and losses,erosion",
      "desc": "The DS Hub SRWQ application provides ratings for nutrient leaching and runoff vulnerability and CART threshold values for nonpoint nitrogen surface loss, nonpoint phosphorus surface loss, sediment transport, nonpoint nitrogen leaching loss, and nonpoint phosphorus leaching loss. Threshold values are computed from each respective vulnerability rating, rainfall-erosivity factor, and amount of irrigation per acre per year. Entering irrigation will adjust the aggregated threshold values for the interest area.",
      "landUse": [],
      "link": "https://dynamicsoilshub.usda.gov/srwq/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Soils Hotline: (402) 437-5378 or (402) 437-5379",
      "email": "usdafpacbc@servicenowservices.com",
      "geography": "48 conterminous states",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "MMP",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 66,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SNAPGRAZE",
      "name": "SNAPGRAZE",
      "short": "SNAPGRAZE",
      "org": "Syracuse University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "soil carbon",
      "desc": "SNAPGRAZE assesses the potential effects of grazing management on soil organic carbon across a range of climates with only eight climate, soil, and management input variables. It links a previous soil organic carbon dynamic model to a recent model of episodic grazing and its effects on primary production.",
      "landUse": [
        "Pasture",
        "Rangeland"
      ],
      "link": "https://doi.org/10.3390/resources9040049",
      "docs": "R package implementation: https://github.com/ruan-de-wet/SNAPGRAZEr/tree/main",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Mark Ritchie",
      "email": "meritchi@syr.edu",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "% sand in top 30cm of soil, long-term mean annual precipitation, long-term mean annual temperature, average number of fires per year, lignin and cellulose content of livestock feed, steady state of biomass without grazing, biomass condition prior to grazing season, number of days within season prior to grazing episode, number of days of grazing episode, number of days left after grazing episode, total number of days in growing season, stocking density, number of pastures per total area, average animal body size, daily consumption rate, relative growth rate of grass biomass",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SIDMA",
      "name": "Social Indicators Data Management and Analysis Tool",
      "short": "SIDMA",
      "org": "Michigan State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "human"
      ],
      "modelClass": [
        "data collection",
        "data storage",
        "data visualization"
      ],
      "outputs": "water quality,socio-economic",
      "desc": "The Social Indicators Data Management and Analysis tool organizes, analyzes, and visualizes social indicators related to nonpoint source management efforts through statistical and spatial relationships.",
      "landUse": [],
      "link": "https://iwr.msu.edu/sidma/Home.aspx",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Glenn O'Neil; Jeremiah Asher",
      "email": "oneilg@msu.edu; asherjer@msu.edu",
      "geography": "",
      "spatialGrain": "Watershed",
      "extent": "",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 64,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SWAT",
      "name": "Soil and Water Assessment Tool",
      "short": "SWAT",
      "org": "Texas A&M University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "hydrology",
      "desc": "The Soil and Water Assessment Tool is a small watershed-to\uf02driver basin\u2013scale model used to simulate the quality and quantity of surface and ground water and predict the environmental impact of land use, land management practices, and climate change. It is widely used in assessing soil erosion prevention and control, nonpoint source pollution control, and regional management of watersheds.",
      "landUse": [],
      "link": "https://swat.tamu.edu/",
      "docs": "https://swat.tamu.edu/docs/",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "https://swat.tamu.edu/contact/",
      "geography": "",
      "spatialGrain": "Watershed,Estuary",
      "extent": "",
      "updated": "14-Nov-23",
      "version": "rev. 692",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SHIP",
      "name": "Soil Health Interpretation Portal",
      "short": "SHIP",
      "org": "Iowa Soybean Association",
      "orgCat": [
        "Private Industry"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "The Iowa Soybean Association funds the Soil Health Interpretation Portal with support from an Iowa NRCS conservation and innovation grant. The background datasets are from research programs that the Iowa Soybean Association and Iowa Corn Growers run. The portal includes an overview of soil health topics, an interactive map of Iowa's physiographic subregions, long-term weather maps of Iowa, and maps indicating the location of fields included in research studies about soil health that provide the data in the two exploratory databases. It also includes functionality to temporarily upload standard soil test information or soil health test information to obtain geospatially referenced reports. Finally, it includes a free soil health test account set-up feature that allows users to store their data for comparison over time.",
      "landUse": [],
      "link": "https://shportal.iasoybeans.com/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "Iowa",
      "spatialGrain": "Field",
      "extent": "State",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 54,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": false
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No point of contact listed",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SnapPlus",
      "name": "Soil Nutrient Application Planner",
      "short": "SnapPlus",
      "org": "University of Wisconsin",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "soil",
        "water"
      ],
      "modelClass": [
        "conservation planning",
        "decision support",
        "data collection"
      ],
      "outputs": "N cycling and losses,P cycling and losses",
      "desc": "Soil Nutrient Application Planner is Wisconsin\u2019s nutrient management planning software.  The program helps farmers make the best use of their on-farm nutrients, as well as make informed and justified commercial fertilizer purchases. By calculating potential soil and phosphorus runoff losses on a field-by-field basis while assisting in the economic planning of manure and fertilizer applications, SnapPlus provides Wisconsin farmers with a tool for protecting soil and water quality.",
      "landUse": [],
      "link": "https://snapplus.wisc.edu/",
      "docs": "https://snapplus.wisc.edu/news-help/snapplus-training-manual/",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "support@snapplus.wisc.edu",
      "geography": "",
      "spatialGrain": "Sub-field",
      "extent": "State",
      "updated": "",
      "version": "20.4",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 70,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SPARROW",
      "name": "Spatially Referenced Regression on Watershed Attributes",
      "short": "SPARROW",
      "org": "USGS",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "water quality",
      "desc": "Spatially Referenced Regression on Watershed Attributes is a watershed modeling technique for relating water-quality measurements made throughout a network of monitoring stations to attributes of the watersheds, such as contaminant sources and environmental factors that affect rates of delivery to streams and in-stream processing. The core of the model consists of a nonlinear regression equation describing the non-conservative transport of contaminants from point and nonpoint (or diffuse) sources on land to rivers and through the stream and river network.",
      "landUse": [],
      "link": "https://www.usgs.gov/mission-areas/water-resources/science/sparrow-modeling-estimating-nutrient-sediment-and-dissolved; https://www.usgs.gov/software/sparrow-modeling-program",
      "docs": "https://pubs.usgs.gov/tm/2006/tm6b3/",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "David Saad",
      "email": "dasaad@usgs.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "HUC12",
      "extent": "National",
      "updated": "4-Mar-19",
      "version": "2.1.0",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 73,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          3.5,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "STEPL",
      "name": "Spreadsheet Tool for Estimating Pollutant Loads",
      "short": "STEPL",
      "org": "EPA",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion,water quality",
      "desc": "The Spreadsheet Tool for Estimating Pollutant Load employs simple algorithms to calculate nutrient and sediment loads from different land uses and load reductions that would result from implementation of various best management practices.",
      "landUse": [],
      "link": "https://19january2021snapshot.epa.gov/nps/spreadsheet-tool-estimating-pollutant-loads-stepl_.html#doc",
      "docs": "https://www.epa.gov/sites/default/files/2021-01/documents/steplguide404.pdf",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "stepl@tetratech.com",
      "geography": "",
      "spatialGrain": "Watershed,Field",
      "extent": "",
      "updated": "27-Oct-20",
      "version": "4.4",
      "public": "Yes",
      "related": "PLET",
      "notes": "Deprecated, replaced by PLET",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 75,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          2.0,
          4.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "SLPP",
      "name": "State Landscape Planning Package",
      "short": "SLPP",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [
        "geospatial analysis"
      ],
      "outputs": "",
      "desc": "The State Landscape Planning Package provides State-specific content to support landscape and watershed-scale planning on cultivated croplands. Unique planning packages are provided for each State and include both an Excel database and static maps that convey information, such as soil vulnerability to sediment and nutrient loss, the extent of NRCS-supported conservation practices present on the landscape, and the extent to which conservation practices have been prioritized to fields that are most vulnerable to nutrient loss. Data are provided on vulnerable soils and treatment priorities at the HUC-12 scale.",
      "landUse": [],
      "link": "",
      "docs": "https://directives.sc.egov.usda.gov/viewerFS.aspx?hid=49241",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Peter Chen",
      "email": "peter.chen@usda.gov",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "HUC12,Watershed,State",
      "extent": "National",
      "updated": "8-Mar-23",
      "version": "Unspecified",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 49,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          3.5,
          3.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "STEP",
      "name": "Stewardship Tool for Environmental Performance",
      "short": "STEP",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [
        "meta-modelling output"
      ],
      "outputs": "",
      "desc": "STEP was developed for the CEAP program and includes data from the APEX model (meta-modeling approach). It sets a threshold for management based on site vulnerability as judged by National Stewardship Threshold targets.",
      "landUse": [],
      "link": "https://www.researchgate.net/publication/316190587_Introduction_to_the_USDA-NRCS_Stewardship_Tool_for_Environmental_Performance_STEP",
      "docs": "https://www.google.com/search?channel=frs&client=firefox-b-1-d&q=Microservices+for+Computing+Nutrient+Loss+Potentials+and+Pesticide+Hazard+Ratings+and+their+Mitigation+on+Agricultural+Land",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "Field,Sub-field",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "",
      "notes": "Found very little public documentation of this model.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 38,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          4.0,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "No point of contact listed"
        ]
      }
    },
    {
      "id": "SALUS",
      "name": "System Approach for Land Use Sustainability",
      "short": "SALUS",
      "org": "Michigan State University",
      "orgCat": [
        "Academia"
      ],
      "type": "software",
      "concerns": [],
      "modelClass": [
        "primary"
      ],
      "outputs": "crop productivity,GHG emissions,soil carbon,N cycling and losses",
      "desc": "The System Approach to Land Use Sustainability program is designed to model continuous crop, soil, water, and nutrient conditions under different management strategies for multiple years. These strategies may have various crop rotations, planting dates, plant populations, irrigation and fertilizer applications, and tillage regimes. The program simulates plant growth and soil conditions every day (during growing seasons and fallow periods) for any time period when weather sequences are available. For any simulation run, various management strategies can be run simultaneously. By running the various strategies at the same time, this effect can be compared on crops and soil under the same weather sequences. This also provides a framework whereby the interaction between different areas under different management practices can be easily compared.",
      "landUse": [],
      "link": "https://basso.ees.msu.edu/salus/index.html",
      "docs": "https://nowlin.css.msu.edu/salus/overview.html",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "https://basso.ees.msu.edu/contact.html",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "",
      "version": "Unspecified",
      "public": "No",
      "related": "CIBO",
      "notes": "CIBO has an exclusive commercial license to SALUS which it has continuously been improving, expanding to new crops, and scaling to address practical needs of agriculture from subfield to continental scales.",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 50,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          2.0,
          4.0,
          3.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Not publicly available",
          "Access restricted or proprietary",
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "VGS",
      "name": "Vegetation GIS Data System",
      "short": "VGS",
      "org": "NRCS,University of Arizona,BLM,NPS",
      "orgCat": [
        "NRCS",
        "Academia",
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "plants"
      ],
      "modelClass": [
        "data collection",
        "mobile app"
      ],
      "outputs": "",
      "desc": "The Vegetation GIS Data System provides a suite of software applications that allow users to record, manage, analyze, and report on natural resource data across multiple land types, including rangeland, cropland, and forests. The University of Arizona developed it in partnership with the USFS, NRCS, BLM, the National Park Service, and the Public Lands Council.",
      "landUse": [],
      "link": "https://vgs.arizona.edu/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Charles \"Chaz\" Perry",
      "email": "vgs@cals.arizona.edu",
      "geography": "",
      "spatialGrain": "Point,Field",
      "extent": "National",
      "updated": "1-Feb-21",
      "version": "5.0.35",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WEPP",
      "name": "Water Erosion Prediction Model",
      "short": "WEPP",
      "org": "NRCS,US Forest Service ,Purdue University",
      "orgCat": [
        "NRCS",
        "Other USDA",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion",
      "desc": "WEPP is a physically based soil erosion\uf02dprediction technology with numerous customized interfaces developed for common applications such as roads, managed forests, forests after wildfires, and rangelands. It also has a large database of cropland soils and vegetation scenarios. The WEPP model is a distributed parameter, continuous simulation model that can describe a given erosion concern in great detail for an experienced user.  \nThe WEPP model integrates hydrology, plant science, hydraulics, and erosion mechanics to predict erosion at the hillslope and watershed scale. It has the capability to model and assess a variety of land uses, climates, and hydrologic conditions. WEPP models hillslope erosion processes (sheet and rill erosion), including snow accumulation and melt, deep percolation of soil water, and subsurface lateral flow.",
      "landUse": [],
      "link": "https://www.nrcs.usda.gov/resources/tech-tools/water-erosion-prediction-project",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Chris Coreil | 817-509-3213",
      "email": "chris.coreil@usda.gov",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "1-Jun-23",
      "version": "",
      "public": "Yes",
      "related": "",
      "notes": "URL for software: https://brenton.nserl.purdue.edu/wepp/",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.5,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WQIAg",
      "name": "Water Quality Index for Agriculture",
      "short": "WQIAg",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "expert synthesis"
      ],
      "outputs": "water quality",
      "desc": "The Water Quality Index for Agriculture is a qualitative, multivariate metric that ranks the combined impact of soil and site characteristics, climate, and management practices on the quality of water exiting as surface runoff from agricultural fields under various conservation scenarios. It combines site-specific information with professional judgement and scientific literature to rank site-specific characteristics and management factors.",
      "landUse": [],
      "link": "https://directives.sc.egov.usda.gov/OpenNonWebContent.aspx?content=40577.wba",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "Harbans Lal, West Technical Support Center, NRCS, Portland OR",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "Partially",
      "related": "",
      "notes": "Details of how to calculate WQIag is public, but we could not access functional software version (URL for web-based application does not work. https://wqiag.sc.egov.usda.gov/)",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 62,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          2.5,
          1.5,
          2.5,
          2.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WASP",
      "name": "Water Quality Simulation Program",
      "short": "WASP",
      "org": "EPA",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "water quality",
      "desc": "This model helps users interpret and predict water quality responses to natural phenomena and manmade pollution for various pollution management decisions. It is a dynamic compartment-modeling program for aquatic systems, including the water column and the underlying benthos.",
      "landUse": [],
      "link": "https://www.epa.gov/ceam/water-quality-analysis-simulation-program-wasp",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Chris Knightes",
      "email": "Knightes.Chris@epa.gov",
      "geography": "",
      "spatialGrain": "Watershed,Estuary,River Segment",
      "extent": "",
      "updated": "2-Apr-19",
      "version": "8.32",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WEPS",
      "name": "Wind Erosion Prediction System",
      "short": "WEPS",
      "org": "NRCS,USDA ARS,Colorado State University",
      "orgCat": [
        "NRCS",
        "Other USDA",
        "Academia"
      ],
      "type": "software",
      "concerns": [
        "air",
        "soil"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "erosion",
      "desc": "WEPS predicts many forms of soil erosion by wind such as saltation-creep and suspension, including PM-10, using a process-based, continuous, daily time-step model that simulates weather, field conditions, crop growth, and hydrology.",
      "landUse": [],
      "link": "https://www.nrcs.usda.gov/resources/tech-tools/wind-erosion-prediction-system",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Chris Coreil | 817-509-3213",
      "email": "chris.coreil@usda.gov",
      "geography": "",
      "spatialGrain": "Field",
      "extent": "",
      "updated": "25-Jul-23",
      "version": "",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 67,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WIN-PST",
      "name": "Windows Pesticide Screening Tool",
      "short": "WIN-PST",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "water"
      ],
      "modelClass": [
        "primary"
      ],
      "outputs": "pesticide pollution",
      "desc": "NRCS field office conservationists, extension agents, crop consultants, and pesticide dealers and producers can use the Windows Pesticide Screening Tool to evaluate the potential of pesticides to move with water and eroded soil or organic matter and affect non-targeted organisms. Users can specify pesticides by product name or active ingredient. Long-term human and fish toxicity data and ratings are included and can be combined with off-site movement potential ratings to provide an overall rating of potential risk from pesticide movement below the root zone and past the edge of the field.",
      "landUse": [],
      "link": "https://www.nrcs.usda.gov/resources/tech-tools/windows-pesticide-screening-tool-win-pst",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "askusda@usda.gov",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "26-Sep-23",
      "version": "3.1.30",
      "public": "Yes",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 69,
        "gates": {
          "G1 Transparency": true,
          "G2 Rights & Control": true,
          "G3 No Lock-in": true,
          "G4 Stewardship": true
        },
        "cats": [
          3.5,
          1.5,
          2.0,
          4.5
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "Limited interoperability / no API"
        ]
      }
    },
    {
      "id": "WPT",
      "name": "Workload Prioritization Tool",
      "short": "WPT",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "software",
      "concerns": [
        "all"
      ],
      "modelClass": [
        "financial/logistics"
      ],
      "outputs": "",
      "desc": "This tool is designed to help manage workload associated with highly competitive programs or targeted funding pools within a program. It enables NRCS to share best practices and provides consistency for greater transparency in the priority-screening process.",
      "landUse": [],
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "",
      "inputs": "",
      "supplementary": "",
      "eta": {
        "score": 22,
        "gates": {
          "G1 Transparency": false,
          "G2 Rights & Control": false,
          "G3 No Lock-in": false,
          "G4 Stewardship": false
        },
        "cats": [
          2.5,
          1.5,
          2.0,
          2.0
        ],
        "cat_labels": [
          "Data Ethics",
          "Interop",
          "Commons Fit",
          "Accessibility"
        ],
        "flags": [
          "No documentation or link found",
          "Not publicly available",
          "Access restricted or proprietary"
        ]
      }
    }
  ],
  "datasets": [
    {
      "id": "ARMS",
      "name": "Agricultural Resource Management Survey",
      "short": "ARMS",
      "org": "NASS,ERS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "all"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The ARMS survey summarizes production practices, resource use, and financial well-being across different types of farms and ranches.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture"
      ],
      "dateStart": "1996",
      "dateEnd": "2021",
      "link": "https://www.ers.usda.gov/data-products/arms-farm-financial-and-crop-production-practices/",
      "docs": "https://www.ers.usda.gov/data-products/arms-farm-financial-and-crop-production-practices/documentation/",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://www.ers.usda.gov/developer/data-apis/arms-data-api/",
      "contact": "",
      "email": "armsteam@usda.gov",
      "geography": "Varies",
      "spatialGrain": "Individual",
      "extent": "National",
      "updated": "15-Dec-22",
      "version": "2021 data",
      "public": "Yes",
      "related": "",
      "notes": "Link for information on which commodities were sampled in which state/year: https://www.ers.usda.gov/data-products/arms-farm-financial-and-crop-production-practices/documentation/#States",
      "dtap": {
        "score": 75,
        "dims": [
          4.0,
          3.5,
          4.5,
          5,
          4.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "Cost_DB",
      "name": "Conservation Cost Database",
      "short": "Cost DB",
      "org": "NRCS,Wolfe\u2019s Neck Center for Agriculture and the Environment",
      "orgCat": [
        "NRCS",
        "Not For Profit"
      ],
      "type": "dataset",
      "concerns": [
        "plants",
        "soil",
        "climate",
        "water",
        "human",
        "air",
        "animals",
        "energy"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Conservation Cost Database is an effort to develop recommendations for NRCS on how to record reliable information on the cost of implementing conservation practices.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture",
        "Forest",
        "Farmstead",
        "Associated Ag Land",
        "Other"
      ],
      "dateStart": "",
      "dateEnd": "",
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "NA",
      "public": "No",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 29,
        "dims": [
          2.0,
          2.0,
          1.5,
          1.0,
          1.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "Dataset access restricted",
          "No machine-readable format",
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "EWG-CONS",
      "name": "Conservation Database",
      "short": "EWG-CONS",
      "org": "Environmental Working Group (EWG)",
      "orgCat": [
        "Not For Profit",
        "Private Industry"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "The USDA's conservation programs pay farmers to adopt practices with environmental and public health benefits. The Conservation Database provides a detailed look at how federal dollars (~$14 billion) have been spent through five major USDA conservation programs from fiscal years 2017 through 2020.",
      "landUse": [],
      "dateStart": "2017",
      "dateEnd": "2020",
      "link": "https://conservation.ewg.org/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "State",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "CPDI,RCA Data Viewer",
      "notes": "",
      "dtap": {
        "score": 51,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          3.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "Governance information missing"
        ]
      }
    },
    {
      "id": "CPDI",
      "name": "Conservation Practice Data and Innovations",
      "short": "CPDI",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "CDPI is a web interface that provides public access to information on NRCS conservation practices and resource concerns by location, including information on acres implemented and dollars obligated.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://cpdi.sc.egov.usda.gov/",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://cpdiapi.sc.egov.usda.gov/",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states,Hawaii,Alaska,US territories",
      "spatialGrain": "State",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "EWG-CONS,RCA Data Viewer",
      "notes": "",
      "dtap": {
        "score": 57,
        "dims": [
          4.0,
          2.0,
          4.5,
          5,
          1.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No temporal coverage info",
          "Governance information missing"
        ]
      }
    },
    {
      "id": "CoPE",
      "name": "Conservation Practice Effectiveness Database",
      "short": "CoPE",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "water"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Conservation Practice Effectiveness Database compiles information on the effectiveness of a suite of conservation practices to treat contaminants in surface runoff and tile drainage water from agricultural landscapes. This includes practices such as no-tillage, conservation crop rotation, drainage water management, blind inlets, and denitrification bioreactors.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "www.doi.org/10.15482/USDA.ADC/1504544",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Doug Smith",
      "email": "douglas.r.smith@usda.gov",
      "geography": "Varies",
      "spatialGrain": "County",
      "extent": "Various",
      "updated": "4-Oct-19",
      "version": "2019",
      "public": "Yes",
      "related": "",
      "notes": "Spatial extent of this asset varies for the different conservation practices included in the database.",
      "dtap": {
        "score": 58,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          2.5,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format"
        ]
      }
    },
    {
      "id": "ConsPoll",
      "name": "Conservation Practitioner Poll",
      "short": "ConsPoll",
      "org": "Soil and Water Conservation Society,Iowa State University",
      "orgCat": [
        "Not For Profit",
        "Academia"
      ],
      "type": "dataset",
      "concerns": [
        "human"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "To address the lack of direct feedback and elevate the perspectives of conservation practitioners, the Soil and Water Conservation Society created the Conservation Practitioner Poll, a survey designed to collect data regularly on the needs of conservation practitioners and their recommendations on a wide variety of topics. The goals of the poll are to learn from practitioners how to improve the conservation delivery system, understand what conservation practitioners need to be satisfied and successful in their jobs, and elevate their voice in national conversations.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "C Morris; JG Arbuckle",
      "email": "arbuckle@iastate.edu",
      "geography": "Iowa,Missouri,Illinois,Wisconsin,Indiana,Minnesota",
      "spatialGrain": "Individual",
      "extent": "Regional",
      "updated": "",
      "version": "2021",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 52,
        "dims": [
          4.0,
          2.0,
          4.0,
          1.0,
          1.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "CR-LMOD",
      "name": "Conservation Resources-Land Management Operations Database",
      "short": "CR-LMOD",
      "org": "USDA ARS,NRCS,Colorado State University",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "water",
        "soil"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Land Management Operations Database (LMOD) was created to integrate crop rotation data developed for RUSLE2 and WEPS, including sequence of crops grown and the farming operations and practices applied. Conservation Resources LMOD or CR-LMOD is the next generation of LMOD which includes data web services to fetch data for applications, and standard Javascript Object Notation (JSON) for inserting information into the WEPS, WEPP, and other models and metamodels.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=4150&context=iemssconference",
      "docs": "https://topsoil.nserl.purdue.edu/~flanagan/erosymp2023/Presentations/23007-Mike_Kucera.pdf",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "",
      "related": "WEPP,WEPS,IET2,RSET,STIR",
      "notes": "",
      "dtap": {
        "score": 48,
        "dims": [
          2.0,
          3.5,
          2.0,
          5,
          1.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "Dataset access restricted",
          "No temporal coverage info",
          "Governance information missing"
        ]
      }
    },
    {
      "id": "CC_Survey",
      "name": "Cover Crop Survey",
      "short": "CC Survey",
      "org": "SARE,ASTA,CTIC",
      "orgCat": [
        "Other USDA",
        "Not For Profit",
        "Private Industry"
      ],
      "type": "dataset",
      "concerns": [
        "plants"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "This survey of ~800 farmers gathers insights into and attitudes about cover crops. Survey participants included current and former cover crop users and farmers and growers who have never planted cover crops. Survey questions included farmer demographics, cover crop experience, yield impacts, and influences on decision making.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://www.ctic.org/data/Cover_Crops_Research_and_Demonstration_Cover_Crop_Survey",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "ctic@ctic.org",
      "geography": "48 conterminous states,Alaska,Hawaii,Puerto Rico",
      "spatialGrain": "Individual",
      "extent": "National",
      "updated": "8-Aug-23",
      "version": "2022-2023 data",
      "public": "Partially",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 44,
        "dims": [
          3.0,
          2.0,
          3.0,
          1.0,
          2.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format"
        ]
      }
    },
    {
      "id": "FSA_Acres",
      "name": "Crop Acreage Data",
      "short": "FSA Acres",
      "org": "FSA",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "plants"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "FSA policy requires that producers participating in certain programs submit an annual report regarding all cropland use on their farms. This dataset contains all reported information on production acres reported by producers.",
      "landUse": [
        "Cropland"
      ],
      "dateStart": "2007",
      "dateEnd": "2023",
      "link": "https://www.fsa.usda.gov/news-room/efoia/electronic-reading-room/frequently-requested-information/crop-acreage-data/index",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states,Hawaii,Caribbean territories",
      "spatialGrain": "County,State",
      "extent": "National",
      "updated": "1-Nov-23",
      "version": "2023 data",
      "public": "Yes",
      "related": "NASS Census",
      "notes": "",
      "dtap": {
        "score": 55,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          4.5,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "Governance information missing"
        ]
      }
    },
    {
      "id": "CSB",
      "name": "Crop Sequence Boundaries",
      "short": "CSB",
      "org": "ERS,NASS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "all"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "This is a dataset of crop boundaries that allows users to estimate crop acreage and characterize historical planting decisions across the contiguous United States. Farmers will be able to access data from eight years of historical crop rotations to enhance their farm records or examine the management history of land that they might have recently started operating. They can also see how their planting decisions compare in their regions.",
      "landUse": [],
      "dateStart": "2015",
      "dateEnd": "2022",
      "link": "https://www.nass.usda.gov/Research_and_Science/Crop-Sequence-Boundaries/index.php",
      "docs": "https://www.nass.usda.gov/Research_and_Science/Crop-Sequence-Boundaries/index.php",
      "metadata": "https://www.nass.usda.gov/Research_and_Science/Crop-Sequence-Boundaries/metadata_Crop-Sequence-Boundaries-2022.htm",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "sm.nass.rdd.gib@usda.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "13-Jul-23",
      "version": "2022 Edition",
      "public": "Yes",
      "related": "CDL",
      "notes": "",
      "dtap": {
        "score": 69,
        "dims": [
          4.0,
          4.5,
          4.5,
          2.0,
          4.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "CDL",
      "name": "Cropland Data Layer",
      "short": "CDL",
      "org": "NASS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "The Cropland Data Layer is a land-cover product produced by USDA NASS that depicts agricultural crops and some natural land cover. It is produced annually and typically released in February or March.",
      "landUse": [],
      "dateStart": "2008",
      "dateEnd": "2022",
      "link": "https://croplandcros.scinet.usda.gov/",
      "docs": "https://www.nass.usda.gov/Research_and_Science/Cropland/Release/",
      "metadata": "https://www.nass.usda.gov/Research_and_Science/Cropland/metadata/meta.php",
      "hasApi": "Yes",
      "apiDocs": "https://nassgeodata.gmu.edu/CropScape/devhelp/help.html",
      "contact": "",
      "email": "SM.NASS.RDD.GIB@usda.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "Sub-field",
      "extent": "National",
      "updated": "30-Jan-23",
      "version": "2022 data",
      "public": "Yes",
      "related": "CSB",
      "notes": "",
      "dtap": {
        "score": 78,
        "dims": [
          4.0,
          4.5,
          4.5,
          5,
          4.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "EDIT",
      "name": "Ecosystem Dynamics Interpretive Tool",
      "short": "EDIT",
      "org": "USDA ARS,NRCS",
      "orgCat": [
        "Other USDA",
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "EDIT is an online information system for development and sharing of ecological site descriptions, ecosystem state and transition models, and land management knowledge. It includes classifications of major land-use areas, which are sets of geographically associated land resource units featuring a particular pattern of soils, water, climate, vegetation, land use, and type of farming.",
      "landUse": [
        "Rangeland"
      ],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://edit.jornada.nmsu.edu/",
      "docs": "https://jornada.nmsu.edu/knowledge-systems/esd",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://edit.jornada.nmsu.edu/resources/esd",
      "contact": "",
      "email": "See https://edit.jornada.nmsu.edu/catalogs/esd for regional contacts",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "Ecological Site",
      "extent": "National",
      "updated": "",
      "version": "1",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 64,
        "dims": [
          4.0,
          3.5,
          4.5,
          5,
          1.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "EWG-SUB",
      "name": "Farm Subsidy Database",
      "short": "EWG-SUB",
      "org": "Environmental Working Group (EWG)",
      "orgCat": [
        "Not For Profit",
        "Private Industry"
      ],
      "type": "dataset",
      "concerns": [
        "human"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "This database tracks $478 billion in farm subsidies from commodity, crop insurance, disaster programs, and conservation payments paid between 1995 and 2021",
      "landUse": [],
      "dateStart": "1995",
      "dateEnd": "2021",
      "link": "https://farm.ewg.org/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "State",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 51,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          3.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "Governance information missing"
        ]
      }
    },
    {
      "id": "Field_Level_National",
      "name": "Field Level National Crop Map",
      "short": "",
      "org": "Indigo Ag",
      "orgCat": [
        "Private Industry"
      ],
      "type": "dataset",
      "concerns": [
        "all"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "This is an interactive map of 300 million acres of U.S. farmland overlaying crop health and farming practices from the Indigo Atlas Technology Platform. Data include crop (corn, soy, wheat, other crop, no crop), crop rotation, no-till, cover crop, and seasonal mean crop health.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://indigoag.unfolded.ai/map/regen",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "",
      "spatialGrain": "",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 31,
        "dims": [
          2.0,
          2.0,
          2.0,
          1.0,
          1.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "Dataset access restricted",
          "No machine-readable format",
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "GAP",
      "name": "Gap Analysis Tool",
      "short": "GAP",
      "org": "USGS",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "dataset",
      "concerns": [
        "animals"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "This is downloadable spatial data shows the range and distribution of almost all vertebrate species in the United States",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "http://gapanalysis.usgs.gov",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "https://answers.usgs.gov/",
      "geography": "48 conterminous states",
      "spatialGrain": "Various",
      "extent": "National",
      "updated": "",
      "version": "Various, by dataset",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 51,
        "dims": [
          4.0,
          2.0,
          4.5,
          2.0,
          1.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "GBIF-US",
      "name": "Global Biodiversity Information Framework- US",
      "short": "GBIF-US",
      "org": "USGS",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "This online all-species mapping information system consists of a large collection of species occurrence datasets (e.g., plants and animals) found in the United States, U.S. Territories, U.S. marine Exclusive Economic Zones, and Canada, with relevant geospatial layers. It is the U.S. node of the Global Biodiversity Information Facility (www.gbif.org) and therefore hosts essentially all records of species occurrences available for the country.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://www.gbif.us/",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://www.gbif.org/developer/summary",
      "contact": "",
      "email": "gbif-us@usgs.gov",
      "geography": "48 conterminous states,Alaska,Hawaii,US territories",
      "spatialGrain": "Point",
      "extent": "National",
      "updated": "",
      "version": "Various, by dataset",
      "public": "Yes",
      "related": "",
      "notes": "Replaces USGS BISON",
      "dtap": {
        "score": 60,
        "dims": [
          4.0,
          2.0,
          4.5,
          5,
          1.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "Iowa_Farm_Poll",
      "name": "Iowa Farm and Rural Life Poll",
      "short": "Iowa Farm Poll",
      "org": "Iowa State University",
      "orgCat": [
        "Academia"
      ],
      "type": "dataset",
      "concerns": [
        "human"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Iowa Farm and Rural Life Poll, an annual survey of Iowa farmers, was established in 1982 to provide timely, relevant information on agriculture and rural life. It is a cooperative project between the Iowa State University Agriculture and Home Economics Experiment Station, ISU Extension Service, and Iowa Department of Agriculture and Land Stewardship. It is managed by ISU Extension Sociology. The overall objective is to understand how ongoing changes in Iowa\u2019s agriculture and rural areas affect farmers and rural society in general.",
      "landUse": [],
      "dateStart": "1982",
      "dateEnd": "2022",
      "link": "https://ext.soc.iastate.edu/programs/iowa-farm-and-rural-life-poll/",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Iowa State University, Sociology Extension, (515)294-6480",
      "email": "",
      "geography": "Iowa",
      "spatialGrain": "Individual",
      "extent": "State",
      "updated": "15-Dec-22",
      "version": "2022 data",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 61,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          4.5,
          4.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format"
        ]
      }
    },
    {
      "id": "MachEcon",
      "name": "Iowa Farm Custom Rate Survey",
      "short": "MachEcon",
      "org": "Iowa State University",
      "orgCat": [
        "Academia"
      ],
      "type": "dataset",
      "concerns": [
        "human"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Iowa Farm Custom Rate Survey is an annual survey of hourly rates for custom machine work, including fuel and labor, repairs, depreciation, interest, and all other machinery costs.",
      "landUse": [],
      "dateStart": "2000",
      "dateEnd": "2023",
      "link": "https://www.extension.iastate.edu/agdm/crops/html/a3-10.html",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Alejandro Plastina, extension economist or Ann M. Johanns, extension program specialist",
      "email": "plastina@iastate.edu or aholste@iastate.edu",
      "geography": "Iowa",
      "spatialGrain": "State",
      "extent": "State",
      "updated": "15-Feb-23",
      "version": "2023 data",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 64,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          4.5,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format"
        ]
      }
    },
    {
      "id": "LANDFIRE",
      "name": "Landscape Fire and Resource Management Planning Tools",
      "short": "LANDFIRE",
      "org": "USFS,USGS,TNC",
      "orgCat": [
        "Other Federal Agency",
        "Not For Profit"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "Landscape Fire and Resource Management Planning Tools are landscape-scale geospatial products to support cross-boundary planning, management, and operations. They produce consistent, comprehensive geospatial data and databases that describe vegetation, wildland fuel, and fire regimes across the United States and insular areas.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://landfire.gov/",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://lfps.usgs.gov/arcgis/rest/services/LandfireProductService/GPServer",
      "contact": "helpdesk@landfire.gov",
      "email": "https://www.landfire.gov/contactus.php",
      "geography": "48 conterminous states,Alaska,Puerto Rico,Hawaii",
      "spatialGrain": "Sub-field",
      "extent": "National",
      "updated": "",
      "version": "Various, by dataset",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 66,
        "dims": [
          4.0,
          2.0,
          4.5,
          5,
          1.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "MANAGE",
      "name": "Measured Annual Nutrient Loads from Agricultural Environments",
      "short": "MANAGE",
      "org": "USDA ARS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "water"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Measured Annual Nutrient Loads from Agricultural Environments database is a readily accessible, easily queried database of site characteristic and field-scale nutrient export data. It contains data from a vast majority of published peer-reviewed nitrogen and phosphorus export studies on homogeneous cultivated pasture and range and forested land uses in the United States under natural rainfall-runoff conditions, as well as artificially drained agricultural land.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://doi.org/10.15482/USDA.ADC/1372907",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "Bruce Vandenberg",
      "email": "bruce.vandenberg@ars.usda.gov",
      "geography": "Alabama,Arkansas,California,Florida,Georgia,Illinois,Indiana,Iowa,Louisiana,Maryland,Minnesota,Mississippi,Missouri,Nebraska,New Hampshire,New Mexico,New York,North Carolina,Ohio,Oklahoma,Oregon,South Carolina,South Dakota,Tennessee,Texas,Vermont,Virginia,Washington,West Virginia,Wisconsin",
      "spatialGrain": "Field",
      "extent": "Regional",
      "updated": "28-Nov-22",
      "version": "6",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 58,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          2.5,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format"
        ]
      }
    },
    {
      "id": "NASS_Census",
      "name": "National Agricultural Census and NASS surveys",
      "short": "NASS Census",
      "org": "NASS",
      "orgCat": [
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "all"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "NASS conducts hundreds of surveys every year and prepares reports covering virtually every aspect of U.S. agriculture (e.g., production and supply of food and fiber, prices that farmers pay and receive, farm labor and wages, farm finances, chemical use, changes in the demographics of U.S. producers)",
      "landUse": [],
      "dateStart": "1850",
      "dateEnd": "2024",
      "link": "https://www.nass.usda.gov/AgCensus/",
      "docs": "https://www.nass.usda.gov/AgCensus/FAQ/index.php",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://quickstats.nass.usda.gov/api/",
      "contact": "",
      "email": "",
      "geography": "US territories,indigenous tribal land,All US states",
      "spatialGrain": "County,State",
      "extent": "National",
      "updated": "11-Apr-19",
      "version": "2017 Census of Agriculture",
      "public": "Yes",
      "related": "FSA Acres",
      "notes": "",
      "dtap": {
        "score": 72,
        "dims": [
          4.0,
          3.5,
          4.5,
          5,
          4.5,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "Governance information missing"
        ]
      }
    },
    {
      "id": "NCSS-SCD",
      "name": "National Cooperative Soil Survey - Soil Characterization Database",
      "short": "NCSS-SCD",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "soil"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The National Cooperative Soil Survey\u2014Soil Characterization Database contains laboratory data for more than 65,000 locations (xy coordinates) throughout the United States and its territories and about 2,100 locations in other countries. It is a compilation of data from the Kellogg Soil Survey Laboratory and several cooperating laboratories. The intended use of the data is to support interpretations related to soil use and management.",
      "landUse": [],
      "dateStart": "1-Jan-77",
      "dateEnd": "2-Dec-22",
      "link": "https://catalog.data.gov/dataset/ncss-soil-characterization-database",
      "docs": "https://www.nrcs.usda.gov/resources/guides-and-instructions/kssl-guidance",
      "metadata": "https://inventory.data.gov/dataset/69f36f6d-8212-47a7-bdb9-72025f849e6a/resource/9aebddcb-f3f1-4e81-a058-8c317675ec26/download/scd_iso19115_version20221202_export.txt.xml",
      "hasApi": "Yes",
      "apiDocs": "https://sdmdataaccess.nrcs.usda.gov/WebServiceHelp.aspx",
      "contact": "",
      "email": "SoilsHotline@usda.gov",
      "geography": "some international samples,48 conterminous states,Alaska,Hawaii,US territories",
      "spatialGrain": "Point",
      "extent": "National",
      "updated": "7-Dec-22",
      "version": "",
      "public": "Yes",
      "related": "SSURGO",
      "notes": "",
      "dtap": {
        "score": 78,
        "dims": [
          4.0,
          4.5,
          4.5,
          5,
          4.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "CRM",
      "name": "National Crop Residue Management Survey",
      "short": "CRM",
      "org": "Conservation Technology Information Center",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "dataset",
      "concerns": [
        "soil"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The National Crop Residue Management Survey is the only survey in the United States designed to measure and track the type of tillage (no-till, ridge-till, mulch-till, reduced-till, and conventional till) by crop at the county level through personal observation of field conditions at mile or half-mile intervals. Funding for the full national survey ended in 2004, although some states have continued to submit their own data",
      "landUse": [],
      "dateStart": "1989",
      "dateEnd": "2011",
      "link": "https://ctic.org/CRM",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "ctic@ctic.org",
      "geography": "48 conterminous states",
      "spatialGrain": "County",
      "extent": "National",
      "updated": "",
      "version": "2011 survey",
      "public": "Partially",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 46,
        "dims": [
          3.0,
          2.0,
          3.0,
          1.0,
          3.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format"
        ]
      }
    },
    {
      "id": "FINBIN",
      "name": "National Farm Financial Database",
      "short": "FINBIN",
      "org": "University of Minnesota",
      "orgCat": [
        "Academia"
      ],
      "type": "dataset",
      "concerns": [
        "human"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "FINBIN summarizes farm data from thousands of agricultural producers who use FINPACK for farm business analysis. FINPACK is a comprehensive farm financial planning and analysis software system that agricultural producers, professionals, educators, and lenders use to help more than 50,000 producers analyze their farm business each year.",
      "landUse": [],
      "dateStart": "1998",
      "dateEnd": "2022",
      "link": "https://finbin.umn.edu/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "https://finbin.umn.edu/Home/Contact",
      "email": "cffm@umn.edu",
      "geography": "Illinois,Michigan,Minnesota,Missouri,Nebraska,North Dakota,Ohio,Pennsylvania,South Carolina,South Dakota,Utah,Wisconsin",
      "spatialGrain": "Farm",
      "extent": "Regional",
      "updated": "",
      "version": "2022 data",
      "public": "Partially",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 55,
        "dims": [
          3.0,
          2.0,
          3.0,
          2.0,
          3.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "NRI",
      "name": "National Resources Inventory",
      "short": "NRI",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "all"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The NRI program collects and produces scientifically credible information on the status, condition, and trends of land, soil, water, and related resources on U.S. non-federal lands in support of efforts to protect, restore, and enhance U.S lands and waters. NRI data include changes and trends in land cover and use, irrigation, land capability class and subclass, prime farmland, soil erosion, and wetlands. Its primary sampling units are areas of land, known as segments, within which detailed data on soil properties and land use are collected at a random sample of points.",
      "landUse": [],
      "dateStart": "1982",
      "dateEnd": "2017",
      "link": "https://www.nrcs.usda.gov/nri",
      "docs": "https://www.nrcs.usda.gov/sites/default/files/2023-10/NRI-TechnicalManual-October2023.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "NRI@usda.gov",
      "geography": "Puerto Rico,Virgin Islands,48 conterminous states,Hawaii",
      "spatialGrain": "Point,County,State",
      "extent": "National",
      "updated": "1-Jan-17",
      "version": "",
      "public": "Partially",
      "related": "",
      "notes": "National- , state, and county-level estimates are available to the public via LUCID, with some ability to request additional data.",
      "dtap": {
        "score": 58,
        "dims": [
          3.0,
          3.5,
          3.0,
          2.0,
          4.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "OpTIS",
      "name": "Operational Tillage Information System",
      "short": "OpTIS",
      "org": "Conservation Technology Information Center; Regrow; The Nature Conservancy",
      "orgCat": [
        "Not For Profit",
        "Private Industry"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "OpTIS is an automated system that maps tillage, residue cover, winter cover, and soil health practices using remote sensing data. Data available for download include total planted area, tillage practice (area or percentage in no-till, reduced till, and conventional tillage), percentage residue cover (in ~15% categories), winter cover (area or percentage of perennial crop, winter commodity crop, cover crop), area or percentage with user-specified combinations of soil health practices.",
      "landUse": [],
      "dateStart": "2015",
      "dateEnd": "2021",
      "link": "https://ctic.org/OpTIS",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "ctic@ctic.org",
      "geography": "48 conterminous states",
      "spatialGrain": "HUC8,Agricultural District",
      "extent": "National",
      "updated": "15-Sep-23",
      "version": "4",
      "public": "Partially",
      "related": "DNDC",
      "notes": "",
      "dtap": {
        "score": 54,
        "dims": [
          3.0,
          2.0,
          3.0,
          2.0,
          4.5,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "PALD",
      "name": "Protected Agricultural Land Database",
      "short": "PALD",
      "org": "American Farmland Trust",
      "orgCat": [
        "Not For Profit"
      ],
      "type": "dataset",
      "concerns": [
        "human"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Protected Agricultural Lands Database is a national inventory of spatial data about protected agricultural lands. It contains boundaries of easements that permanently protect private farmland and ranchland in the United States.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://farmlandinfo.org/statistics/pald/",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "maps@farmland.org",
      "geography": "48 conterminous states",
      "spatialGrain": "Field",
      "extent": "National",
      "updated": "",
      "version": "Unknown",
      "public": "Upon Request",
      "related": "",
      "notes": "Public data view shows # protected acres in sub-state regions, but presumably full dataset is points or polygons.",
      "dtap": {
        "score": 37,
        "dims": [
          2.0,
          2.0,
          2.0,
          2.0,
          1.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "Dataset access restricted",
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "RAP",
      "name": "Rangeland Analysis Platform",
      "short": "RAP",
      "org": "NRCS,USDA ARS,BLM,University of Montana",
      "orgCat": [
        "NRCS",
        "Other USDA",
        "Other Federal Agency",
        "Academia"
      ],
      "type": "dataset",
      "concerns": [
        "plants"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Rangeland Analysis Platform is an innovative online tool that quickly visualizes and analyzes vegetation data. Datasets include continuous vegetation cover, annual aboveground biomass, and 16-day aboveground biomass. The platform combines satellite imagery with thousands of on-the-ground vegetation measurements that BLM, the National Park Service, and NRCS collect.",
      "landUse": [
        "Rangeland"
      ],
      "dateStart": "21-Jul-86",
      "dateEnd": "",
      "link": "https://rangelands.app/",
      "docs": "https://rangelands.app/support/",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Sarah McCord; Jeremy Maestas; Nicole Hupp",
      "email": "sarah.mccord@usda.gov; jeremy.maestas@usda.gov; nhupp@blm.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "Sub-field",
      "extent": "National",
      "updated": "17-Mar-23",
      "version": "3",
      "public": "Yes",
      "related": "",
      "notes": "Bulk download of RAP datasets available at http://rangeland.ntsg.umt.edu/data/rap/. Also, the RAP products are available within Google Earth Engine. See https://rangelands.app/support/61-processing-rap-data-in-google-earth-engine",
      "dtap": {
        "score": 71,
        "dims": [
          4.0,
          3.5,
          4.5,
          2.0,
          4.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "RaBET",
      "name": "Rangeland Brush Estimation Tool",
      "short": "RaBET",
      "org": "NRCS,USDA ARS",
      "orgCat": [
        "NRCS",
        "Other USDA"
      ],
      "type": "dataset",
      "concerns": [
        "plants"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The Rangeland Brush Estimation Tool compares, analyzes, and visualizes changes in woody cover canopy over time. It relies on woody cover raster data, developed by the ARS, for more than 20 major land resource areas, with each containing up to 20 years of historical woody cover percentage data.",
      "landUse": [
        "Rangeland"
      ],
      "dateStart": "2000",
      "dateEnd": "2023",
      "link": "https://rabetcover.app/",
      "docs": "https://rabetcover.app/RaBET_quick_guide_11062023.pdf",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "Carrie-Ann Houdeshell; Chandra Holifield",
      "email": "Carrie-ann.houdeshell@usda.gov; Chandra.Holifield@usda.gov",
      "geography": "US West",
      "spatialGrain": "MLRA",
      "extent": "Regional",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 67,
        "dims": [
          4.0,
          3.5,
          4.5,
          2.0,
          3.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "RaCA",
      "name": "Rapid Carbon Assessment",
      "short": "RaCA",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [],
      "modelClass": [],
      "outputs": "",
      "desc": "The Natural Resources Conservation Service\u2019s (NRCS) Soil Science Division started the Rapid Carbon\nAssessment (RaCA) project to capture information on the carbon content of soils across the conterminous\nUnited States (CONUS) at a single point in time. A secondary goal was to capture organic carbon stocks in different kinds of soils and land uses.",
      "landUse": [
        "Cropland",
        "Rangeland",
        "Pasture",
        "Forest"
      ],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://www.nrcs.usda.gov/resources/data-and-reports/rapid-carbon-assessment-raca",
      "docs": "https://www.nrcs.usda.gov/sites/default/files/2022-10/RaCA_Methodology_Sampling_Summary.pdf",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states",
      "spatialGrain": "Point",
      "extent": "National",
      "updated": "1-Jan-13",
      "version": "",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 54,
        "dims": [
          4.0,
          3.5,
          4.5,
          1.0,
          2.5,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "Governance information missing"
        ]
      }
    },
    {
      "id": "RCA_Data_Viewer",
      "name": "Soil and Water Resources Conservation Act Data Viewer",
      "short": "RCA Data Viewer",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "all"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The RCA of 1977, as amended, provides the USDA with broad strategic assessment and planning authority for the conservation, protection, and enhancement of soil, water, and related natural resources. Through the RCA Data Viewer, users can graph, map, and download customized datasets based on practices applied through NRCS programs and survey data on land use, soil erosion, and prime farmland from the NRI.",
      "landUse": [],
      "dateStart": "2005 (acres or practices applied) or 2014 (financial assistance))",
      "dateEnd": "2022",
      "link": "https://www.nrcs.usda.gov/resources/data-and-reports/rca-data-viewer",
      "docs": "",
      "metadata": "",
      "hasApi": "Unknown",
      "apiDocs": "",
      "contact": "",
      "email": "NRCS.OpenData@usda.gov",
      "geography": "All US states",
      "spatialGrain": "State",
      "extent": "National",
      "updated": "",
      "version": "Unspecified",
      "public": "Yes",
      "related": "CPDI,EWG-CONS",
      "notes": "RCA data like those that are publicly available are stored in the NRCS National Planning and Agreements Database (NPAD)",
      "dtap": {
        "score": 57,
        "dims": [
          4.0,
          2.0,
          4.5,
          2.0,
          3.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": []
      }
    },
    {
      "id": "SSURGO",
      "name": "Soil Survey Geographic Database",
      "short": "SSURGO",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "soil"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "SSURGO contains information about soil that the National Cooperative Soil Survey collected over a century. The information was gathered by walking over the land and observing the soil. Many soil samples were analyzed in laboratories. The soil map units are linked to attributes in the National Soil Information System relational database, which gives the proportionate extent of the component soils and their properties.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo",
      "docs": "",
      "metadata": "",
      "hasApi": "Yes",
      "apiDocs": "https://sdmdataaccess.nrcs.usda.gov/WebServiceHelp.aspx",
      "contact": "",
      "email": "soilshotline@usda.gov",
      "geography": "Commonwealths,Island Nations,US territories,48 conterminous states,Alaska,Hawaii",
      "spatialGrain": "Sub-field",
      "extent": "National",
      "updated": "",
      "version": "",
      "public": "Yes",
      "related": "NCSS-SCD",
      "notes": "",
      "dtap": {
        "score": 60,
        "dims": [
          4.0,
          2.0,
          4.5,
          5,
          1.0,
          3.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "SVI",
      "name": "Soil Vulnerability Index for Cultivated Cropland",
      "short": "SVI",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "soil",
        "water"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The CEAP SVI-cc groups soils according to vulnerability to losses of sediment and nutrients during cultivation using a set of rules designed to be applied to the cultivated cropland portion of detailed soil survey maps (SSURGO). It was developed using the CEAP Cropland model output to identify four ranked categories or classes of inherent vulnerability (high, moderately high, moderate, low) for NRI-CEAP sample point soils. The CEAP team used these inherent soil vulnerability classifications to establish a set of SVI rules for defining soil vulnerability based on six common soil parameters: hydrologic soil group, Kw factor (whole soil erodibility factor, includes rock fragments), slope, soil taxonomic classification, soil drainage class, and soil parent material (recently added).",
      "landUse": [
        "Cropland"
      ],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://directives.sc.egov.usda.gov/OpenNonWebContent.aspx?content=47292.wba",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "Chieh (Peter) Chen",
      "email": "chieh.chen@usda.gov",
      "geography": "",
      "spatialGrain": "Sub-field",
      "extent": "",
      "updated": "",
      "version": "",
      "public": "No",
      "related": "",
      "notes": "incorporated into CEAP Conservation Benefits Indicator application available through NRCS GeoPortal",
      "dtap": {
        "score": 40,
        "dims": [
          2.0,
          2.0,
          2.0,
          1.0,
          1.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "Dataset access restricted",
          "No machine-readable format",
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "STEWARDS",
      "name": "Sustaining the Earth's Watersheds-Agricultural Research Data System",
      "short": "STEWARDS",
      "org": "NRCS",
      "orgCat": [
        "NRCS"
      ],
      "type": "dataset",
      "concerns": [
        "water"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "To support CEAP, a publicly available web-based watershed data system was developed to provide data search, viewing, and downloading capabilities. It is a data delivery system with a GIS interface using space, time, and topic as key fields for searching an extensive database of soil, water, climate, and land management data from multiple long-term research watersheds.",
      "landUse": [],
      "dateStart": "",
      "dateEnd": "",
      "link": "https://data.nal.usda.gov/dataset/stewards-data-delivery-application-usdaars-conservation-effects-assessment-project",
      "docs": "",
      "metadata": "",
      "hasApi": "",
      "apiDocs": "",
      "contact": "Kevin Cole",
      "email": "kevin.j.cole@usda.gov",
      "geography": "48 conterminous states",
      "spatialGrain": "Watershed",
      "extent": "National",
      "updated": "",
      "version": "",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 54,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          1.0,
          5
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "No temporal coverage info"
        ]
      }
    },
    {
      "id": "well_contaminate",
      "name": "well nitrate contamination data (public + private)",
      "short": "well contaminate",
      "org": "USGS",
      "orgCat": [
        "Other Federal Agency"
      ],
      "type": "dataset",
      "concerns": [
        "water"
      ],
      "modelClass": [],
      "outputs": "",
      "desc": "The data presented in this indicator are based on predicted groundwater nitrate concentrations that the USGS three-dimensional extreme gradient boosting machine learning model generates. The model was developed to predict the distribution of nitrate in groundwater across the conterminous United States. Nitrate was predicted at a 1- km2 resolution for two drinking water zones, each of variable depth: one for domestic supply and one for public supply. The model used measured nitrate concentrations from 12,082 wells and included predictor variables representing well characteristics, hydrologic conditions, soil type, geology, land use, climate, and nitrogen inputs. Predictor variables derived from empirical or numerical process-based models were included to integrate information on controlling processes and conditions.",
      "landUse": [],
      "dateStart": "1988",
      "dateEnd": "2018",
      "link": "https://doi.org/10.5066/P9IPKWFL",
      "docs": "",
      "metadata": "",
      "hasApi": "No",
      "apiDocs": "",
      "contact": "",
      "email": "",
      "geography": "48 conterminous states",
      "spatialGrain": "1km grid",
      "extent": "National",
      "updated": "",
      "version": "",
      "public": "Yes",
      "related": "",
      "notes": "",
      "dtap": {
        "score": 51,
        "dims": [
          4.0,
          2.0,
          4.5,
          1.0,
          3.0,
          2.0
        ],
        "dim_labels": [
          "Consent",
          "Provenance",
          "Access",
          "Machine Read",
          "Longitudinal",
          "Governance"
        ],
        "flags": [
          "No machine-readable format",
          "Governance information missing"
        ]
      }
    }
  ]
};

// Freeze to prevent accidental mutation
Object.freeze(REGISTRY);
if (typeof module !== "undefined") module.exports = REGISTRY;
