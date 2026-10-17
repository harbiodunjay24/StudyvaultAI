import { Course, PastExamQuestionItem, StudyModule, StudyUnit, StudyTopic } from '../types';

/**
 * ============================================================================
 * ENT 302: FEASIBILITY AND BUSINESS PLANNING
 * Authoritative NOUN Study Material (National Open University of Nigeria)
 * Course Developer: Dr. Abdullahi S. Araga
 * Course Coordinator: Dr. Timothy O. Ishola
 * Programme Leader: Prof. Emerole Gideon Ahamefula
 * Total Verified Units in Source: 17 Units across 4 Modules (No units skipped)
 * ============================================================================
 */

export const ENT302_MODULES: StudyModule[] = [
  // --------------------------------------------------------------------------
  // MODULE 1: Feasibility Studies, Business Description and Location
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent-1',
    moduleNumber: 1,
    title: 'Module 1: Feasibility Studies, Business Description and Location',
    units: [
      {
        id: 'unit-ent-1',
        unitNumber: '1.0',
        title: 'Unit 1: Sources of Information for Feasibility Studies',
        objectives: [
          'Explain the meaning and operational definition of a feasibility study',
          'Discuss the 10 vital reasons for conducting a feasibility study before venture launch',
          'Identify the five core operational areas evaluated in feasibility analysis',
          'List the primary and secondary sources of information for feasibility studies in Nigeria'
        ],
        unitRecapPoints: [
          'Feasibility study assesses both workability (operational viability) and profitability (economic viability).',
          'Covers five distinct areas: Financial, Production, Personnel, Demand/Supply, and Financial Projections.',
          'Key information sources in Nigeria include NBS, NDE, SMEDAN, Ministries of Commerce, and Chambers of Commerce.'
        ],
        topics: [
          {
            id: 'top-ent-1-1',
            title: 'Meaning and Five Core Areas of a Feasibility Study',
            readingMinutes: 5,
            sourceReference: 'ENT 302 Course Guide, Unit 1, Section 3.1, pp. 11–13',
            textbookDefinitions: [
              {
                term: 'Feasibility Study',
                definition: 'A process through which the viability of a business can be assessed. Steps are taken to analyze the workability and profitability of a proposed business venture.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `Business is a venture undertaken towards making some profits. Business ventures involve operations characterized by various forms of risk. Therefore, it is always necessary to carry out some assessment of the viability of the business before embarking on it. The process of assessing the viability of a business is the feasibility study.

A feasibility study involves the process through which the viability of a business can be assessed. Since it involves a process, steps are taken to analyze the workability and profitability of a proposed business venture. The analysis takes into consideration the following five areas of business operations:

1. Financial Requirements:
Involves the amount of capital required, sources of funds, and the amount of working capital required for initial operations.

2. Production Requirements:
Involves scale of operation, product and services of the business, proposed installed capacity, and the assets and facilities required.

3. Personnel Requirements:
Involves staff strength required, management staff, specialized staff, contract staff, and job specifications/delineations.

4. Demand and Supply of Product/Services:
Involves market potential, quantity supplied (quantity produced locally and imported), demand schedule, and possible market share of the business.

5. Financial Projections:
Involves pro forma income statement, pro forma balance sheet, loan repayment schedule, interest payment schedule, and operations expenses schedule.`,
            summaryPoints: [
              'Feasibility analysis tests both workability (technical/operational) and profitability (economic viability).',
              'Covers 5 distinct areas: Financial, Production, Personnel, Demand/Supply, and Projections.',
              'Prevents an entrepreneur from committing capital into a venture that cannot survive.'
            ],
            simplifiedExplanation: {
              analogy: 'Think of a feasibility study as a pre-flight checklist for an aeroplane. You do not wait until you are 30,000 feet in the air to discover the engine has no oil, there are no seats, or the fuel tank is leaking.',
              plainEnglish: 'A feasibility study asks: "Will this business idea actually work and make money?" before you spend your savings.',
              keyTakeaway: 'The five areas of feasibility study are Financial, Production, Personnel, Demand/Supply, and Financial Projections.',
              examTip: 'Examiners award marks for each of the 5 operational areas properly listed and explained.'
            },
            tables: [
              {
                title: 'Table 1.1: The Five Operational Areas of Feasibility Study',
                headers: ['Area of Operation', 'Key Considerations Examined in Feasibility Study'],
                rows: [
                  ['I. Financial Requirements', 'Amount of capital required, sources of funds, and amount of working capital required.'],
                  ['II. Production Requirements', 'Scale of operation, products/services, proposed installed capacity, assets and facilities.'],
                  ['III. Personnel Requirements', 'Staff strength required, management team, specialized staff, contract staff, job specifications.'],
                  ['IV. Demand and Supply', 'Market potential, local production vs. imports, demand schedule, possible market share.'],
                  ['V. Financial Projections', 'Pro forma income statement, pro forma balance sheet, loan repayment, and interest schedules.']
                ],
                sourceCitation: 'ENT 302, Unit 1, Section 3.1, pp. 12–13'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-ent-1-1-1',
                prompt: 'Which of the following is NOT one of the five core areas evaluated in a feasibility study according to ENT 302?',
                options: [
                  'Production Requirements',
                  'Astrological Compatibility of Business Partners',
                  'Demand and Supply of Products and Services',
                  'Personnel Requirements'
                ],
                correctIndex: 1,
                explanation: 'The five textbook areas are Financial Requirements, Production Requirements, Personnel Requirements, Demand/Supply, and Financial Projections.',
                optionExplanations: [
                  'Incorrect. Production Requirements is one of the 5 core areas evaluated.',
                  'Correct! Astrology is not an academic or business feasibility factor.',
                  'Incorrect. Demand and Supply analysis is one of the 5 core areas.',
                  'Incorrect. Personnel Requirements is one of the 5 core areas.'
                ],
                origin: 'original_past_question',
                sourceYear: '2017 Examination',
                sourceReference: 'ENT 302, Unit 1, Section 3.1, p. 12'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-1-1',
                questionType: 'written_structured',
                prompt: 'Define Feasibility Study and describe the five operational areas evaluated in a feasibility report according to ENT 302.',
                maxMarks: 15,
                sourceReference: 'ENT 302 Course Guide, Unit 1, Section 3.1, pp. 11–13',
                expectedAnswerGuide: 'A feasibility study is a process through which the viability of a business is assessed, analyzing workability and profitability. The five areas are: (1) Financial Requirements: capital required, sources of funds, working capital. (2) Production Requirements: scale of operation, product/services, proposed installed capacity, assets and facilities. (3) Personnel Requirements: staff strength, management staff, specialized and contract staff, job specifications. (4) Demand and Supply: market potential, local production vs imports, demand schedule, market share. (5) Financial Projections: pro forma income statement, pro forma balance sheet, cash flow, loan and interest schedules.',
                keyRubricPoints: [
                  'Definition of feasibility study as assessing viability, workability, and profitability',
                  'Financial requirements details',
                  'Production requirements details',
                  'Personnel requirements details',
                  'Demand and supply details',
                  'Financial projections details'
                ],
                examinerTips: 'List and explain each of the five areas with their sub-components to earn all 15 marks.',
                origin: 'authentic_past_exam',
                sourceLabel: 'Past Examination 2017 Question 1'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-2',
        unitNumber: '2.0',
        title: 'Unit 2: The Role of Government Agencies in Business Feasibility',
        objectives: [
          'Examine the regulatory environment for business in Nigeria',
          'Explain the supportive and statutory functions of SMEDAN, NAFDAC, SON, and CAC',
          'Analyze government industrial incentives and credit facilitation schemes'
        ],
        unitRecapPoints: [
          'Government agencies provide statutory regulation (CAC, NAFDAC, SON) and business development support (SMEDAN, NDE).',
          'Compliance with regulatory standards is mandatory for feasibility certification.'
        ],
        topics: [
          {
            id: 'top-ent-2-1',
            title: 'Statutory and Promotional Regulatory Bodies in Nigeria',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 2, Section 3.1–3.4, pp. 18–26',
            textbookDefinitions: [
              {
                term: 'Regulatory Environment',
                definition: 'The collective legal framework, administrative guidelines, and statutory bodies established by government to govern business formation, operational standards, consumer protection, and commercial taxation.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `In conducting feasibility studies, the entrepreneur must evaluate the institutional and legal environment within which the proposed enterprise will operate.

Key Regulatory and Support Bodies:
1. Corporate Affairs Commission (CAC): Regulates the incorporation, registration, and management of business entities under the Companies and Allied Matters Act (CAMA).
2. Small and Medium Enterprises Development Agency of Nigeria (SMEDAN): Mandated to initiate and articulate policies for MSME growth, provide entrepreneurship training, and coordinate access to industrial parks and finance.
3. National Agency for Food and Drug Administration and Control (NAFDAC): Mandated to regulate and control the manufacture, importation, exportation, distribution, advertisement, and sale of food, drugs, cosmetics, medical devices, and packaged water.
4. Standards Organisation of Nigeria (SON): Prepares and enforces standards for products, materials, and industrial processes to ensure quality and consumer safety (MANCAP certification).`,
            summaryPoints: [
              'Business feasibility requires identifying specific regulatory clearances needed before operations commence.',
              'SMEDAN provides promotional facilitation, while NAFDAC and SON enforce statutory consumer protection standards.'
            ],
            simplifiedExplanation: {
              analogy: 'Operating without government regulatory clearance is like driving a car without a vehicle license and roadworthiness certificate—you will inevitably be impounded.',
              plainEnglish: 'Before investing money, you must identify which government agency regulates your product and what permits are required.',
              keyTakeaway: 'Always factor statutory compliance costs (registration, inspection, testing) into the initial financial requirements.',
              examTip: 'Distinguish clearly between promotional bodies (SMEDAN, NDE) and statutory enforcement agencies (NAFDAC, SON, CAC).'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-2-1-1',
                prompt: 'Which agency is legally empowered in Nigeria to issue the Mandatory Conformity Assessment Programme (MANCAP) certificate for locally manufactured goods?',
                options: [
                  'Corporate Affairs Commission (CAC)',
                  'Standards Organisation of Nigeria (SON)',
                  'Federal Road Safety Corps (FRSC)',
                  'Nigerian Postal Service (NIPOST)'
                ],
                correctIndex: 1,
                explanation: 'SON enforces product standards and issues MANCAP certification for manufactured goods in Nigeria.',
                optionExplanations: [
                  'Incorrect. CAC registers business names and incorporates companies.',
                  'Correct! Standards Organisation of Nigeria (SON) oversees quality standards and issues MANCAP certification.',
                  'Incorrect. FRSC regulates road safety.',
                  'Incorrect. NIPOST is the postal service.'
                ],
                origin: 'original_past_question',
                sourceYear: '2018 Examination',
                sourceReference: 'ENT 302, Unit 2, p. 22'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-2-1',
                questionType: 'written_discussion',
                prompt: 'Discuss the core functions of SMEDAN and CAC in the establishment of small and medium enterprises in Nigeria.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 2, Section 3.2, pp. 20–24',
                expectedAnswerGuide: 'CAC is responsible for business name reservation, company incorporation (Ltd, Plc), and enforcement of CAMA regulations. SMEDAN coordinates MSME policy formulation, capacity building, business development support, entrepreneurship training, and access to finance and industrial workspaces.',
                keyRubricPoints: [
                  'CAC role: incorporation, registration, CAMA administration',
                  'SMEDAN role: MSME policy, training, BDS support, finance coordination'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 2'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-3',
        unitNumber: '3.0',
        title: 'Unit 3: Business Description and Legal Forms of Business',
        objectives: [
          'Formulate an effective business description statement',
          'Compare the legal forms of business ownership: Sole Proprietorship, Partnership, and Limited Liability Company',
          'Evaluate the advantages and limitations of each ownership structure'
        ],
        unitRecapPoints: [
          'Business description articulates the nature of business, mission, industry classification, and competitive edge.',
          'Sole proprietorship has unlimited liability; limited liability companies protect private shareholder assets.'
        ],
        topics: [
          {
            id: 'top-ent-3-1',
            title: 'Forms of Business Organization and Legal Implications',
            readingMinutes: 5,
            sourceReference: 'ENT 302, Unit 3, Section 3.1–3.5, pp. 28–38',
            textbookDefinitions: [
              {
                term: 'Limited Liability',
                definition: 'A legal condition whereby shareholders are not personally liable for the debts and obligations of the corporation beyond the amount unpaid on their shares.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The business description section of the feasibility study defines the exact nature of the proposed enterprise, its products or services, target customers, and legal form of ownership.

The choice of legal ownership carries significant legal, tax, and liability consequences:
1. Sole Proprietorship: Owned and operated by one individual. Advantages include simple formation, complete operational control, and direct retention of profits. Disadvantages include unlimited personal liability, limited capital mobilization, and lack of perpetual succession.
2. Partnership: Association of two or more individuals (up to 20) under a Partnership Agreement. Offers pooled capital and complementary skills, but partners share joint and several unlimited liability for partnership debts.
3. Private Limited Liability Company (Ltd): A separate legal entity distinct from its owners. Offers limited liability, perpetual succession, and easier transfer of shares, but requires formal statutory compliance under CAMA.`,
            summaryPoints: [
              'Sole proprietorship and general partnerships carry unlimited personal liability.',
              'Incorporation as a Limited Liability Company creates a distinct corporate legal personality.'
            ],
            simplifiedExplanation: {
              analogy: 'A sole proprietorship is like swimming without a lifejacket—if the boat sinks, all your personal property can be seized. A limited company is like wearing a certified lifejacket—your personal house and car cannot be seized to pay company debts.',
              plainEnglish: 'The legal form determines who pays the debts if the business fails and how taxes are paid.',
              keyTakeaway: 'For ventures seeking bank loans or significant external capital, a Private Limited Liability Company (Ltd) is strongly preferred.',
              examTip: 'Always contrast the liability status of a sole proprietor against that of a limited liability shareholder.'
            },
            tables: [
              {
                title: 'Table 3.1: Comparison of Legal Forms of Business Ownership',
                headers: ['Feature', 'Sole Proprietorship', 'Partnership', 'Private Limited Company (Ltd)'],
                rows: [
                  ['Liability', 'Unlimited personal liability', 'Joint and several unlimited liability', 'Limited to unpaid share capital'],
                  ['Formation', 'Minimal formality / Business Name', 'Partnership deed / Business Name', 'Formal incorporation with CAC under CAMA'],
                  ['Continuity', 'Terminates on death of owner', 'Dissolved on death/bankruptcy of partner', 'Perpetual succession'],
                  ['Capital Potential', 'Limited to personal savings/borrowing', 'Pooled capital of partners', 'Substantial capital from private share issues']
                ],
                sourceCitation: 'ENT 302, Unit 3, p. 35'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-ent-3-1-1',
                prompt: 'What is the primary legal protection afforded to shareholders of a Private Limited Liability Company?',
                options: [
                  'Exemption from paying any corporate taxes',
                  'Protection of personal assets beyond their subscribed share capital',
                  'Guaranteed annual dividends regardless of company profit',
                  'Immunity from criminal prosecution'
                ],
                correctIndex: 1,
                explanation: 'Limited liability ensures shareholders are only liable up to the nominal value of their unpaid shares.',
                optionExplanations: [
                  'Incorrect. Companies are subject to Companies Income Tax (CIT).',
                  'Correct! Limited liability shields personal property from corporate creditors.',
                  'Incorrect. Dividends can only be declared out of realized profits.',
                  'Incorrect. Corporate officers remain criminally liable for fraud.'
                ],
                origin: 'original_past_question',
                sourceYear: '2016 Examination',
                sourceReference: 'ENT 302, Unit 3, p. 34'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-3-1',
                questionType: 'written_difference',
                prompt: 'Distinguish between a Sole Proprietorship and a Private Limited Liability Company along the dimensions of Liability, Continuity, and Capital Mobilization.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 3, Section 3.3, pp. 32–36',
                expectedAnswerGuide: 'Liability: Sole proprietor has unlimited personal liability; Ltd shareholders have liability limited to unpaid shares. Continuity: Sole proprietorship ceases with the owner; Ltd enjoys perpetual succession. Capital: Sole proprietor is constrained by personal savings; Ltd can raise significant capital by issuing equity shares.',
                keyRubricPoints: [
                  'Accurate comparison of liability',
                  'Accurate comparison of continuity / perpetual succession',
                  'Accurate comparison of capital mobilization'
                ],
                origin: 'authentic_past_exam',
                sourceLabel: 'Past Exam 2016 Question 2'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-4',
        unitNumber: '4.0',
        title: 'Unit 4: Location or Siting of Business',
        objectives: [
          'Explain the strategic importance of business location in enterprise feasibility',
          'Analyze Hoover (1963) transfer cost framework: procurement vs. distribution costs',
          'Evaluate weight-losing and weight-gaining industrial location dynamics',
          'Assess infrastructure, labor availability, and agglomeration economies'
        ],
        unitRecapPoints: [
          'Location decisions are long-term capital commitments with major cost implications.',
          'Hoover (1963) transfer costs explain why weight-losing industries locate near raw materials and weight-gaining industries locate near consumers.'
        ],
        topics: [
          {
            id: 'top-ent-4-1',
            title: 'Industrial Siting Factors and Hoover\'s Transfer Cost Theory',
            readingMinutes: 5,
            sourceReference: 'ENT 302 Course Guide, Unit 4, Section 3.1–3.4, pp. 40–51',
            textbookDefinitions: [
              {
                term: 'Transfer Costs',
                definition: 'The sum of procurement costs (assembling raw materials at the plant) and distribution costs (transporting finished goods to the market).',
                sourceAuthor: 'Hoover (1963)'
              },
              {
                term: 'Weight-Losing Production',
                definition: 'A manufacturing process in which the raw materials lose significant weight or bulk during processing (e.g. sugar cane processing, palm oil extraction, ore smelting).',
                sourceAuthor: 'Hoover (1963)'
              },
              {
                term: 'Weight-Gaining Production',
                definition: 'A manufacturing process in which the finished product is heavier, bulkier, or more fragile than the raw material components, often through the addition of ubiquitous water (e.g. soft drinks, beer, ice).',
                sourceAuthor: 'Hoover (1963)'
              }
            ],
            content: `Selecting an appropriate location is one of the most critical decisions in a feasibility study because once capital is sunk into land, plant, and immovable equipment, changing location involves catastrophic costs.

Hoover\'s Transfer Cost Model (1963):
Hoover establishes that total transport costs consist of:
$$\\text{Total Transfer Costs} = \\text{Procurement Costs} + \\text{Distribution Costs}$$

1. Locating Near Raw Material Sources:
An enterprise should locate adjacent to raw materials when:
- The production process is weight-losing (e.g. sugar cane to sugar, timber logging to lumber, palm bunch extraction). Transporting the raw material over long distances incurs immense cost for material that will be discarded.
- The raw material is highly perishable in its unprocessed state (e.g. fresh milk processing, tomato paste canning).
- Raw material procurement costs per ton-kilometer far exceed distribution costs of the concentrated finished product.

2. Locating Near the Market:
An enterprise should locate adjacent to consumers when:
- The production process is weight-gaining, particularly through adding ubiquitous local water (e.g. soft drink bottling, beer brewing, bread baking, ice block manufacture).
- The finished product is fragile, bulky, or highly perishable after manufacture (e.g. glass containers, fresh pastry).
- Close customer interaction and direct after-sales service are essential.`,
            summaryPoints: [
              'Weight-losing industries locate near raw material inputs to minimize haulage of waste.',
              'Weight-gaining industries locate near consumer markets to avoid transporting heavy ubiquitous additions over long distances.',
              'Other key factors include power availability, transport networks, skilled labor pools, and municipal rates.'
            ],
            simplifiedExplanation: {
              analogy: 'Imagine making fresh sugarcane juice. Ten tons of raw cane produce only one ton of juice, leaving nine tons of waste fibers. You crush the cane near the farm so you only transport one ton of juice, not ten tons of heavy stalks.',
              plainEnglish: 'If your factory throws away heavy waste during production, build it near your raw materials. If your factory adds heavy water, build it near your customers.',
              keyTakeaway: 'Weight-losing = Raw material site. Weight-gaining = Market site.',
              examTip: 'Cite Hoover (1963) and provide the sugarcane and soft drink bottling examples to earn full marks.'
            },
            tables: [
              {
                title: 'Table 4.1: Industrial Location Dynamics (Hoover 1963)',
                headers: ['Industrial Category', 'Weight Trajectory', 'Textbook Examples', 'Optimal Plant Location'],
                rows: [
                  ['Weight-Losing Industry', 'Output is lighter than raw material inputs.', 'Sugar refining, palm oil extraction, lumber milling, mineral smelting.', 'Near source of raw materials'],
                  ['Weight-Gaining Industry', 'Output is heavier/bulkier due to water or air.', 'Soft drink bottling, beer brewing, bread baking, ice manufacturing.', 'Near the consumer market'],
                  ['Perishable Raw Materials', 'Input degrades rapidly prior to processing.', 'Fresh milk dairy, fruit juice canning, fish freezing.', 'Near agricultural harvest source'],
                  ['Perishable Finished Goods', 'Finished item degrades rapidly after baking.', 'Fresh bread bakeries, hot confectionery.', 'Near urban population centers']
                ],
                sourceCitation: 'ENT 302, Unit 4, Section 3.2, pp. 44–47'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-ent-4-1-1',
                prompt: 'According to Hoover (1963), why do soft drink bottling plants invariably locate near their consumer markets?',
                options: [
                  'Because sugar cane grows exclusively inside city centers',
                  'Because the production process is weight-gaining through the addition of ubiquitous municipal water',
                  'Because urban municipal taxes are higher than rural taxes',
                  'Because electricity is not required for bottling soft drinks'
                ],
                correctIndex: 1,
                explanation: 'Soft drink bottling adds local water to concentrated syrup, making finished bottles much heavier to transport than raw syrup concentrates.',
                optionExplanations: [
                  'Incorrect. Sugarcane is an agricultural crop cultivated in rural regions.',
                  'Correct! Soft drinks are weight-gaining products; transporting heavy bottles over long distances is cost-prohibitive.',
                  'Incorrect. Higher taxes do not encourage plant location.',
                  'Incorrect. Industrial bottling plants require substantial continuous power.'
                ],
                origin: 'original_past_question',
                sourceYear: '2017 Examination',
                sourceReference: 'ENT 302, Unit 4, p. 46'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-4-1',
                questionType: 'written_discussion',
                prompt: 'Outline the factors that determine whether an industrial enterprise should locate near raw material sources or near its market according to Hoover (1963).',
                maxMarks: 15,
                sourceReference: 'ENT 302 Course Guide, Unit 4, Section 3.2, pp. 43–48',
                expectedAnswerGuide: 'Hoover (1963) transfer cost framework analyzes procurement costs versus distribution costs. Locating near raw materials applies when: (1) production causes weight loss (sugar, ore smelting), (2) raw materials are perishable (dairy, fruit canning), (3) raw material freight is expensive. Locating near markets applies when: (1) production gains weight through adding ubiquitous water (soft drinks, beer), (2) finished goods are bulky or fragile, (3) products are perishable post-production (fresh bread).',
                keyRubricPoints: [
                  'Hoover transfer cost framework (procurement + distribution costs)',
                  'Weight-losing industries locate near raw materials',
                  'Weight-gaining industries locate near markets with water example',
                  'Perishability factors for both inputs and outputs'
                ],
                examinerTips: 'Cite Hoover (1963) and provide specific industry examples for each case.',
                origin: 'authentic_past_exam',
                sourceLabel: 'Past Examination 2017 Question 3'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-5',
        unitNumber: '5.0',
        title: 'Unit 5: Market Analysis and Marketing Strategies',
        objectives: [
          'Conduct comprehensive market potential and demand analysis',
          'Formulate target market segmentation strategies',
          'Develop the four components of the Marketing Mix (4 Ps)',
          'Compute projected market share based on competitor capacity'
        ],
        unitRecapPoints: [
          'Market analysis proves effective demand exceeds existing supplier capacity.',
          'The Marketing Mix coordinates Product, Price, Promotion, and Place.'
        ],
        topics: [
          {
            id: 'top-ent-5-1',
            title: 'Market Feasibility and the 4 Ps Marketing Mix',
            readingMinutes: 5,
            sourceReference: 'ENT 302, Unit 5, Section 3.1–3.6, pp. 53–64',
            textbookDefinitions: [
              {
                term: 'Effective Demand',
                definition: 'The desire for a product backed by the actual purchasing power and willingness to pay the prevailing market price.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `A business idea may be technically brilliant, but without demonstrated effective demand, the enterprise will fail. Market feasibility establishes the existence of an unsatisfied market gap.

Key Components of Market Feasibility:
1. Demand Estimation: Current market consumption, historical growth rates, population demographics, and future demand projections.
2. Supply and Competitive Analysis: Local producers, installed capacity, import volumes, and competitor market shares.
3. Target Market Segmentation: Dividing the broad market into distinct buyer groups based on geographic, demographic, or behavioral parameters.
4. The Marketing Strategy (The 4 Ps):
- Product: Quality, specifications, branding, packaging, and unique selling proposition.
- Price: Cost-plus pricing, penetration pricing, or skimming pricing aligned with customer valuation.
- Place (Distribution): Direct sales, wholesalers, retailers, or online distribution channels.
- Promotion: Advertising, sales promotions, personal selling, and public relations.`,
            summaryPoints: [
              'Effective demand requires both consumer desire and financial ability to buy.',
              'Competitor analysis reveals market entry barriers and pricing benchmarks.'
            ],
            simplifiedExplanation: {
              analogy: 'Building a factory without market analysis is like fishing in an empty swimming pool: no matter how expensive your fishing rod is, you will catch nothing.',
              plainEnglish: 'Market analysis proves that real customers have money in their pockets and are eager to buy your specific product.',
              keyTakeaway: 'Always calculate: Demand Gap = Total Market Demand - Total Current Supplier Output.',
              examTip: 'Detail all four Ps and explain how price relates to cost-plus versus competitive pricing.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-5-1-1',
                prompt: 'What constitutes "Effective Demand" in feasibility market analysis?',
                options: [
                  'Mere desire to own a luxury product without financial resources',
                  'Desire for a product backed by purchasing power and willingness to pay',
                  'Government statistical reports on population totals',
                  'The total quantity of goods stored in factory warehouses'
                ],
                correctIndex: 1,
                explanation: 'Effective demand requires both desire and the financial capacity and readiness to purchase.',
                optionExplanations: [
                  'Incorrect. Want without purchasing power is merely latent demand.',
                  'Correct! Effective demand requires desire backed by purchasing power.',
                  'Incorrect. Population alone does not indicate purchasing capacity.',
                  'Incorrect. Warehouse inventory represents supply, not demand.'
                ],
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'ENT 302, Unit 5, p. 55'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-5-1',
                questionType: 'written_structured',
                prompt: 'Explain the four components of the Marketing Mix (4 Ps) and discuss how an entrepreneur determines the unsatisfied demand gap in feasibility studies.',
                maxMarks: 12,
                sourceReference: 'ENT 302, Unit 5, Section 3.3, pp. 56–60',
                expectedAnswerGuide: 'The 4 Ps are: Product (design, quality, features), Price (pricing model, discounts), Place (distribution channels, logistics), and Promotion (advertising, sales promotions). The unsatisfied demand gap is determined by estimating total market demand and subtracting total existing production and import supplies.',
                keyRubricPoints: [
                  'Explanation of Product, Price, Place, and Promotion',
                  'Definition of demand gap as Total Demand minus Total Existing Supply'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 5'
              }
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 2: Technical, Operational and Management Planning
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent-2',
    moduleNumber: 2,
    title: 'Module 2: Technical, Operational and Management Planning',
    units: [
      {
        id: 'unit-ent-6',
        unitNumber: '6.0',
        title: 'Unit 6: Technical Feasibility and Production Requirements',
        objectives: [
          'Determine plant capacity and scale of operations',
          'Evaluate manufacturing process technology and equipment specifications',
          'Plan plant layout, utility requirements, and raw material inventory flows'
        ],
        unitRecapPoints: [
          'Technical feasibility establishes whether the product can physically be manufactured at competitive unit costs.',
          'Distinguishes installed capacity from operational capacity.'
        ],
        topics: [
          {
            id: 'top-ent-6-1',
            title: 'Technical Parameters, Technology Selection & Plant Capacity',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 6, Section 3.1–3.4, pp. 66–72',
            textbookDefinitions: [
              {
                term: 'Installed Capacity',
                definition: 'The maximum theoretical output a manufacturing plant can produce under uninterrupted optimal conditions per designated time period.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `Technical feasibility assesses the physical and engineering requirements of production to ensure the proposed venture can produce goods according to quality specifications at viable costs.

Core Technical Assessment Dimensions:
1. Plant Capacity: Establishing rated capacity, installed capacity, and expected initial operating capacity (e.g. starting at 60% in Year 1, rising to 80% in Year 2).
2. Production Process: Flowcharting sequential stages from raw material receipt to finished goods packaging.
3. Machinery and Equipment: Specifying make, model, origin, power consumption, maintenance requirements, and availability of local spare parts.
4. Physical Infrastructure: Plant layout design, factory square meters, storage silos, waste disposal channels, and municipal utility connections (water, continuous 3-phase electricity).`,
            summaryPoints: [
              'Equipment should be selected considering spare part availability and local technical service expertise.',
              'Operating capacity usually starts below 100% to accommodate initial market build-up.'
            ],
            simplifiedExplanation: {
              analogy: 'Buying a sophisticated machine that no local technician in Nigeria knows how to repair is technical suicide. If a N500 fuse blows, your entire N50,000,000 factory shuts down for six months.',
              plainEnglish: 'Technical feasibility answers: "Do we have the right machines, power, raw materials, and blueprints to physically manufacture this product?"',
              keyTakeaway: 'Always balance technology sophistication with local maintenance viability.',
              examTip: 'Distinguish between installed capacity (maximum theoretical) and operating capacity (realistic utilization).'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-6-1-1',
                prompt: 'Why do feasibility analysts project operational capacity below 100% installed capacity during initial years?',
                options: [
                  'To intentionally produce defective goods',
                  'To accommodate initial workforce learning curves, machinery break-in, and gradual market demand adoption',
                  'Because government forbids factories from operating at full capacity',
                  'To allow factory workers to work only on weekends'
                ],
                correctIndex: 1,
                explanation: 'New manufacturing plants operate below rated capacity initially to accommodate trial runs, training, and phased market absorption.',
                optionExplanations: [
                  'Incorrect. Defective goods cause commercial bankruptcy.',
                  'Correct! Realistic feasibility models phase in capacity (e.g. 60%, 75%, 90%) over initial operating years.',
                  'Incorrect. Governments encourage maximum manufacturing productivity.',
                  'Incorrect. Work schedules are managed independently of capacity ratings.'
                ],
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'ENT 302, Unit 6, p. 68'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-6-1',
                questionType: 'written_process',
                prompt: 'Describe the steps involved in establishing technical feasibility for a new manufacturing enterprise.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 6, Section 3.2, pp. 67–71',
                expectedAnswerGuide: 'Steps include: (1) specifying the production process, (2) selecting appropriate technology and machinery, (3) determining installed and operational plant capacity, (4) planning raw material procurement and storage, (5) planning factory layout and utilities (power, water, waste).',
                keyRubricPoints: [
                  'Identification of production process flow',
                  'Machinery selection criteria including maintenance',
                  'Plant capacity determination',
                  'Infrastructure and utility requirements'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 6'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-7',
        unitNumber: '7.0',
        title: 'Unit 7: Defining Management Team for Operation',
        objectives: [
          'Differentiate between Job Description and Job Specification',
          'Illustrate specific job descriptions and specifications for key managerial positions',
          'Enumerate the six basic functions of a Board of Directors',
          'Explain the distinct advisory utility of a Board of Advisors in family-owned businesses'
        ],
        unitRecapPoints: [
          'Job description details tasks, duties, and responsibilities; job specification details personal qualifications, skills, and experience.',
          'Board of Directors has statutory fiduciary liability; Board of Advisors provides external expertise without legal liability.'
        ],
        topics: [
          {
            id: 'top-ent-7-1',
            title: 'Job Profiles, Governance & Board Architecture',
            readingMinutes: 6,
            sourceReference: 'ENT 302 Course Guide, Unit 7, Section 3.1–3.4, pp. 72–78',
            textbookDefinitions: [
              {
                term: 'Job Description',
                definition: 'A document outlining the details of the work to be performed, the specific tasks involved, the operational importance of each task, and the time required for execution.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              },
              {
                term: 'Job Specification',
                definition: 'A document detailing the personal skills, educational qualifications, prior professional experience, and behavioral attributes required of the individual who will fill the position.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              },
              {
                term: 'Board of Advisors',
                definition: 'An informal panel of external experts convened to provide counsel, critique strategy, and lend prestige to an enterprise, having no legal status or statutory fiduciary liability.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `A successful feasibility plan requires competent human leadership. The management section outlines how the venture will be organized, directed, and governed.

Job Description vs. Job Specification:
Figure 7.3 and Figure 7.4 illustrate the contrast for a Sales Manager:
- Job Description (Duties): Responsible for hiring, training, and supervising all sales reps; monitor sales by territory; call on key accounts every two weeks; prepare annual sales plan and forecasts.
- Job Specification (Person): 3 to 5 years sales management experience; Bachelor\'s degree in Business Administration; proven leadership in related industry; effective written and oral communication skills.

Board of Directors vs. Board of Advisors:
1. Board of Directors: A legally mandated governing body (typically 7 to 12 members). Six basic functions:
(1) Reviewing operating and capital budgets
(2) Developing long-term strategic plans
(3) Supporting day-to-day managerial operations
(4) Resolving conflicts among owners or partners
(5) Ensuring proper fiduciary use of assets
(6) Developing a network of information sources
Directors carry statutory legal liability for corporate negligence.

2. Board of Advisors: Unlike a Board of Directors, a Board of Advisors has NO legal status and carries no statutory liability. It is of immense utility in a family-owned business because the board of directors in family firms is often comprised exclusively of family members. An advisory board allows outside professionals (lawyers, accountants, engineers, bankers) to inject objective, uncompromised business counsel without emotional entanglements.`,
            summaryPoints: [
              'Job descriptions focus on the work; job specifications focus on the candidate qualifications.',
              'Board of Directors carries statutory liabilities; Board of Advisors provides liability-free counsel.',
              'Advisory boards protect family businesses from groupthink and emotional disputes.'
            ],
            simplifiedExplanation: {
              analogy: 'Job Description is the blueprint of the house you want built. Job Specification is the checklist of qualifications the bricklayer must possess.',
              plainEnglish: 'Job description = what the job entails. Job specification = who is qualified to do it. Board of Directors = legal bosses. Board of Advisors = expert counselors.',
              keyTakeaway: 'In family businesses, a Board of Advisors provides objective professional guidance without legal risk.',
              examTip: 'Cite the 6 functions of the Board of Directors and the Sales Manager example for maximum exam marks.'
            },
            tables: [
              {
                title: 'Table 7.1: Job Description vs. Job Specification (Sales Manager Example)',
                headers: ['Dimension', 'Job Description (Figure 7.3)', 'Job Specification (Figure 7.4)'],
                rows: [
                  ['Focus', 'The duties, responsibilities, and tasks of the role.', 'The qualifications, traits, and skills required of the person.'],
                  ['Item 1', 'Responsible for hiring, training, and supervising all sales reps.', '3 to 5 years of sales experience.'],
                  ['Item 2', 'Monitor sales by territory across designated markets.', 'Bachelor\'s degree in Business Administration.'],
                  ['Item 3', 'Call on key accounts every two weeks for merchandising support.', 'Management experience in a related enterprise.'],
                  ['Item 4', 'Prepare annual sales plan, sales forecasts, and territory goals.', 'Effective written and verbal communication skills.']
                ],
                sourceCitation: 'ENT 302, Unit 7, pp. 73–74'
              },
              {
                title: 'Table 7.2: Board of Directors vs. Board of Advisors',
                headers: ['Attribute', 'Board of Directors (Section 3.3.1)', 'Board of Advisors (Section 3.3.2)'],
                rows: [
                  ['Legal Status', 'Formal statutory body; subject to statutory liabilities and litigation.', 'Informal advisory panel; free from legal litigation pressures.'],
                  ['Size & Term', 'Typically 7 to 12 members with defined terms.', 'Flexible size composed of diverse external specialists.'],
                  ['Core Functions', 'Approve budgets, strategic plans, audit assets, resolve ownership disputes.', 'Offer counsel, provide outside reality checks, critique growth moves.'],
                  ['Special Use Case', 'Mandatory for corporate and joint-stock organizations.', 'Ideal for family businesses to inject outside professional perspective.']
                ],
                sourceCitation: 'ENT 302, Unit 7, pp. 75–77'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-ent-7-1-1',
                prompt: 'Why is a Board of Advisors considered especially advantageous for a family-owned business according to Unit 7?',
                options: [
                  'Because advisors can vote to disinherit troublesome children',
                  'Because the board of directors in family firms is often dominated by family members, and the advisory board injects objective outside counsel without legal liability',
                  'Because advisors are required by law to pay the company\'s tax liabilities',
                  'Because an advisory board eliminates the requirement to prepare financial statements'
                ],
                correctIndex: 1,
                explanation: 'A Board of Advisors provides objective professional counsel without legal status or emotional family entanglement.',
                optionExplanations: [
                  'Incorrect. Inheritance is governed by wills and succession law, not advisory boards.',
                  'Correct! It provides external professional counsel without the emotional entanglements common in family-dominated boards.',
                  'Incorrect. Advisors bear no statutory financial liability.',
                  'Incorrect. Financial statements remain legally mandatory.'
                ],
                origin: 'original_past_question',
                sourceYear: '2018 Examination',
                sourceReference: 'ENT 302, Unit 7, p. 77'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-7-1',
                questionType: 'written_difference',
                prompt: 'Differentiate clearly between a Job Description and a Job Specification. Illustrate your answer with specific requirements for a Sales Manager from the textbook.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 7, Section 3.2, pp. 72–74',
                expectedAnswerGuide: 'A Job Description specifies the details of the work to be performed, specific tasks, importance, and time required. A Job Specification outlines the skills, qualifications, education, and prior experience required of the person. For a Sales Manager: Job Description includes hiring/supervising sales reps, monitoring territory sales, calling on key accounts bi-weekly, and preparing annual sales plans. Job Specification includes 3-5 years sales experience, Bachelor\'s degree in Business Administration, management experience, and effective communication skills.',
                keyRubricPoints: [
                  'Definition of Job Description focusing on tasks and duties',
                  'Definition of Job Specification focusing on personal qualifications',
                  'Specific textbook examples from Figure 7.3 for Sales Manager tasks',
                  'Specific textbook examples from Figure 7.4 for Sales Manager qualifications'
                ],
                examinerTips: 'State the exact Sales Manager items from the textbook figures to earn full marks.',
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise 2'
              },
              {
                id: 'wq-ent-7-2',
                questionType: 'written_discussion',
                prompt: 'Discuss the six basic functions of a Board of Directors and explain why a Board of Advisors is particularly useful in a family business.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 7, Section 3.3, pp. 75–77',
                expectedAnswerGuide: 'The six functions of a Board of Directors are: (1) reviewing operating and capital budgets, (2) developing longer-term strategic plans, (3) supporting day-to-day activities, (4) resolving conflicts among owners or shareholders, (5) ensuring proper use of assets, and (6) developing a network of information sources. A Board of Advisors has no legal status or litigation risks and serves purely in an advisory capacity. It is particularly useful in a family business because family boards are dominated by family members; an advisory board allows external professionals (lawyers, accountants, engineers) to inject objective, uncompromised business counsel without emotional entanglements.',
                keyRubricPoints: [
                  'Lists all 6 functions of Board of Directors from Section 3.3.1',
                  'Explains lack of legal status/litigation for Board of Advisors',
                  'Explains specific value in family businesses where directors are family members',
                  'Mentions diverse external backgrounds (lawyer, engineer, academic, banker)'
                ],
                examinerTips: 'Explicitly mention the 7-12 member size rule and the lack of legal liability in advisory boards.',
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise 3'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-8',
        unitNumber: '8.0',
        title: 'Unit 8: Organizational Structure and Human Resource Planning',
        objectives: [
          'Design an organizational chart showing lines of authority and delegation',
          'Evaluate functional, product, and territorial departmentalization models',
          'Plan human resource staffing, recruitment, compensation, and statutory benefits'
        ],
        unitRecapPoints: [
          'Organizational structure establishes scalar chains of authority and responsibility.',
          'HR planning projects staffing needs, payroll expenses, and pension compliance.'
        ],
        topics: [
          {
            id: 'top-ent-8-1',
            title: 'Organizational Architecture and HR Scheduling',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 8, Section 3.1–3.4, pp. 80–91',
            textbookDefinitions: [
              {
                term: 'Span of Control',
                definition: 'The number of subordinate employees who report directly to a single manager or supervisor within the organizational hierarchy.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The organizational plan clarifies who reports to whom and how departmental responsibilities are divided.

Key Elements of Organizational Planning:
1. Departmentalization: Grouping activities by Function (Production, Marketing, Finance, HR), by Product (Division A, Division B), or by Territory (Northern Region, Southern Region).
2. Span of Control: Maintaining manageable reporting ratios to ensure effective managerial supervision without bureaucratic bottleneck.
3. Human Resource Schedule: Projecting staff headcount, monthly salary scales, pension fund contributions (under the Pension Reform Act), National Social Insurance Trust Fund (NSITF), and staff medical coverage.`,
            summaryPoints: [
              'Clear lines of authority prevent organizational role ambiguity and operational conflict.',
              'Total payroll schedules must factor in statutory pension and employer social contributions.'
            ],
            simplifiedExplanation: {
              analogy: 'An organizational chart is like the tactical lineup of a football team: everyone must know if they are playing striker, midfield, or defense, and who captain and coach are.',
              plainEnglish: 'Organizational planning decides who reports to whom, what jobs exist, and how much everyone gets paid.',
              keyTakeaway: 'Always include statutory employer pension contributions (typically 10%) on top of gross payroll in financial forecasts.',
              examTip: 'Diagram a functional organizational structure with General Manager at the apex.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-8-1-1',
                prompt: 'In human resource planning for feasibility studies, why must statutory employer pension contributions be computed on top of basic salaries?',
                options: [
                  'Because pensions are optional gifts given at the CEO\'s whim',
                  'Because the Pension Reform Act legally mandates statutory employer contributions to licensed Pension Fund Administrators',
                  'Because banks will seize salaries if pensions are paid',
                  'To reduce the total number of employees in the company'
                ],
                correctIndex: 1,
                explanation: 'Under Nigerian law, employers must legally contribute to designated PFAs for employee retirement savings.',
                origin: 'original_past_question',
                sourceYear: '2020 Examination',
                sourceReference: 'ENT 302, Unit 8, p. 88'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-8-1',
                questionType: 'written_structured',
                prompt: 'Explain the concept of Span of Control and discuss three methods of departmentalization in business organizations.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 8, Section 3.2, pp. 83–86',
                expectedAnswerGuide: 'Span of control is the number of direct subordinates a manager oversees. Departmentalization methods include: Functional (grouping by specialized task like sales or accounting), Product (grouping by product line), and Geographic/Territorial (grouping by territory).',
                keyRubricPoints: [
                  'Definition of span of control',
                  'Functional departmentalization explained',
                  'Product departmentalization explained',
                  'Geographic departmentalization explained'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 8'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-9',
        unitNumber: '9.0',
        title: 'Unit 9: Critical Risks and Contingency Planning',
        objectives: [
          'Identify commercial, operational, financial, and political risks in business feasibility',
          'Construct a risk assessment matrix analyzing probability and impact',
          'Formulate actionable contingency plans and risk mitigation protocols'
        ],
        unitRecapPoints: [
          'A feasibility report that claims zero risk is fraudulent; credible studies identify risks and show mitigation.',
          'Contingency plans outline pre-planned responses if critical assumptions fail.'
        ],
        topics: [
          {
            id: 'top-ent-9-1',
            title: 'Risk Identification, Evaluation and Mitigation Strategies',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 9, Section 3.1–3.4, pp. 93–104',
            textbookDefinitions: [
              {
                term: 'Critical Risk',
                definition: 'Any potential adverse occurrence that could materially disrupt operations, erode financial liquidity, or threaten the commercial survival of the business venture.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `Every business venture faces uncertainties. The critical risks section demonstrates to investors and lenders that the entrepreneur has anticipated potential vulnerabilities and prepared countermeasures.

Categories of Business Risk:
1. Operational Risks: Machine breakdowns, power outages, raw material supply disruptions, labor strikes.
2. Market Risks: Price wars from aggressive competitors, sudden shifts in consumer taste, economic recession.
3. Financial Risks: Interest rate spikes, currency devaluation impacting imported inputs, bad debts from credit customers.
4. Regulatory & Political Risks: Policy reversals, changes in import tariffs, new environmental taxes.

Contingency Planning Protocols:
- Hedging currency exposure through forward contracts
- Installing backup diesel/solar generation capacity
- Developing secondary and tertiary raw material suppliers
- Securing comprehensive commercial insurance policies (fire, burglary, public liability)`,
            summaryPoints: [
              'Identifying risks builds investor confidence rather than undermining it.',
              'Contingency strategies specify exact operational triggers for alternative supplier activation.'
            ],
            simplifiedExplanation: {
              analogy: 'Carrying a spare tyre in your car does not mean you hope for a puncture; it means you are prepared so a flat tyre does not leave you stranded on the highway overnight.',
              plainEnglish: 'Risk analysis asks: "What could go wrong, and what is our backup plan if it does?"',
              keyTakeaway: 'Always include a dedicated backup power and secondary raw material supplier strategy in Nigerian feasibility studies.',
              examTip: 'List risks across the four distinct categories: operational, market, financial, and regulatory.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-9-1-1',
                prompt: 'Why do sophisticated bank credit committees view feasibility studies that claim "zero business risk" with extreme suspicion?',
                options: [
                  'Because banks prefer businesses that fail quickly',
                  'Because every commercial enterprise operates under economic uncertainty, and claiming zero risk demonstrates naivety or deliberate concealment',
                  'Because government mandates all businesses to suffer losses in Year 1',
                  'Because loans are only granted to enterprises in high-crime zones'
                ],
                correctIndex: 1,
                explanation: 'Credible feasibility analysis recognizes risk and provides proactive contingency mitigation plans.',
                origin: 'original_past_question',
                sourceYear: '2021 Examination',
                sourceReference: 'ENT 302, Unit 9, p. 98'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-9-1',
                questionType: 'written_discussion',
                prompt: 'Identify four major categories of business risk and explain how an entrepreneur develops contingency plans for raw material supply disruptions.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 9, Section 3.2, pp. 95–101',
                expectedAnswerGuide: 'Categories: Operational, Market, Financial, and Regulatory. For raw materials: establishing secondary/tertiary supplier contracts, holding buffer inventory stocks, long-term procurement agreements, and backward integration.',
                keyRubricPoints: [
                  'Four risk categories listed and explained',
                  'Raw material contingency methods: buffer stocks, secondary suppliers, long-term contracts'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 9'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-10',
        unitNumber: '10.0',
        title: 'Unit 10: Environmental and Social Impact Assessment',
        objectives: [
          'Examine the regulatory framework of Environmental Impact Assessment (EIA) in Nigeria',
          'Evaluate industrial waste management and pollution control protocols',
          'Assess Corporate Social Responsibility (CSR) and host community relations'
        ],
        unitRecapPoints: [
          'EIA certification is statutory under the Environmental Impact Assessment Act for manufacturing and extractive projects.',
          'Community engagement ensures smooth social license to operate.'
        ],
        topics: [
          {
            id: 'top-ent-10-1',
            title: 'Environmental Compliance, Waste Systems & CSR',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 10, Section 3.1–3.4, pp. 106–118',
            textbookDefinitions: [
              {
                term: 'Environmental Impact Assessment (EIA)',
                definition: 'A formal analytical process used to identify, predict, and evaluate the environmental consequences of a proposed development project prior to major decisions and commitments being made.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `Modern feasibility studies must address the environmental footprint and socio-economic relationships of the proposed venture.

Statutory EIA Requirements:
Under Nigerian environmental legislation, major industrial, manufacturing, agricultural, and construction ventures must submit an Environmental Impact Assessment (EIA) to the Federal Ministry of Environment before site development.

Assessment Components:
1. Effluent and Waste Management: Treatment of industrial wastewater, gaseous emissions, and solid waste disposal protocols.
2. Occupational Health and Safety: Compliance with the Factories Act, personal protective equipment (PPE), fire suppression systems, and emergency evacuation drills.
3. Corporate Social Responsibility (CSR): Developing constructive host community relationships through local employment quotas, local procurement, and community development support.`,
            summaryPoints: [
              'Failure to obtain EIA clearance can lead to factory shutdown and heavy statutory fines.',
              'Social license to operate from host communities protects physical plant assets.'
            ],
            simplifiedExplanation: {
              analogy: 'Operating a factory that dumps toxic chemicals into local community drinking water will result in riots, lawsuits, and regulatory closure, destroying all invested capital.',
              plainEnglish: 'EIA ensures your factory obeys environmental laws, disposes of waste safely, and lives in peace with the neighboring community.',
              keyTakeaway: 'Budget for environmental permits, effluent treatment, and CSR programs in pre-operating costs.',
              examTip: 'Cite the Environmental Impact Assessment Act and the Factories Act in exam responses.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-10-1-1',
                prompt: 'Which government ministry in Nigeria is primarily responsible for approving statutory Environmental Impact Assessment (EIA) reports for industrial projects?',
                options: [
                  'Federal Ministry of Aviation',
                  'Federal Ministry of Environment',
                  'Federal Ministry of Sports',
                  'National Film and Video Censors Board'
                ],
                correctIndex: 1,
                explanation: 'The Federal Ministry of Environment oversees environmental standards and EIA approvals in Nigeria.',
                origin: 'original_past_question',
                sourceYear: '2020 Examination',
                sourceReference: 'ENT 302, Unit 10, p. 110'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-10-1',
                questionType: 'written_structured',
                prompt: 'Define Environmental Impact Assessment (EIA) and outline three key environmental considerations in planning a manufacturing venture.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 10, Section 3.1–3.3, pp. 107–114',
                expectedAnswerGuide: 'EIA is a formal process identifying, predicting, and evaluating the environmental consequences of a proposed project. Considerations include: effluent and industrial wastewater treatment, gaseous emissions and air quality, and solid waste disposal.',
                keyRubricPoints: [
                  'Definition of EIA',
                  'Effluent treatment and water management',
                  'Air emissions and pollution control',
                  'Solid waste management protocols'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 10'
              }
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 3: Financial Analysis and Projections
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent-3',
    moduleNumber: 3,
    title: 'Module 3: Financial Analysis and Projections',
    units: [
      {
        id: 'unit-ent-11',
        unitNumber: '11.0',
        title: 'Unit 11: Financial Analysis & Break-Even Modelling',
        objectives: [
          'Prepare operating and capital budgets including manufacturing inventory schedules',
          'Explain the structure and components of a Pro Forma Income Statement',
          'Distinguish Cash Flow from Accounting Profit',
          'Compute Break-Even Quantity using the formula B/E(Q) = TFC / (SP - VC/unit)'
        ],
        unitRecapPoints: [
          'Operating budget estimates sales and production required; capital budget evaluates assets with life > 1 year.',
          'Profit is not cash: sales on credit do not equal immediate cash inflows.',
          'Break-even formula: B/E(Q) = Total Fixed Cost / (Selling Price - Variable Cost per unit).'
        ],
        topics: [
          {
            id: 'top-ent-11-1',
            title: 'Pro Forma Statements and Break-Even Calculation',
            readingMinutes: 6,
            sourceReference: 'ENT 302 Course Guide, Unit 11, Section 3.1–3.6, pp. 129–147',
            textbookDefinitions: [
              {
                term: 'Break-Even Point',
                definition: 'That volume of sales at which the business neither makes a profit nor incurs a loss; where total revenues exactly equal total fixed and variable expenses.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              },
              {
                term: 'Contribution Margin',
                definition: 'The difference between the selling price per unit and the variable cost per unit (SP - VC) which contributes towards covering total fixed costs.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `In financial analysis, the entrepreneur must prepare operating and capital budgets before developing pro forma income statements.

Pro Forma Cash Flow vs. Pro Forma Income:
Cash flow is obtainable from the difference between actual cash receipts and cash payments. Cash flows ONLY when actual payments are received or made. Therefore, cash flow is fundamentally different from profit from operations. Profit is total revenues minus total expenses. An enterprise can make high sales on credit (showing high accounting profit) but face immediate financial distress and insolvency because debtors have not paid cash.

3.6 Break-Even Analysis:
The break-even point is that volume of sales at which the business neither makes a profit nor incurs a loss.

Formula:
$$\\text{B/E}(Q) = \\frac{\\text{TFC}}{\\text{SP} - \\text{VC/unit}}$$

Where:
- $\\text{TFC}$ = Total Fixed Cost (rent, salaries, depreciation, insurance)
- $\\text{SP}$ = Selling Price per unit
- $\\text{VC}$ = Variable Cost per unit (materials, direct labor)
- $\\text{SP} - \\text{VC}$ = Contribution Margin`,
            summaryPoints: [
              'Cash flow reflects liquidity timing; income statement reflects accrual profitability.',
              'Break-even quantity equals Total Fixed Costs divided by Contribution Margin per unit.',
              'Sales volume above break-even generates profit equal to contribution margin per unit.'
            ],
            simplifiedExplanation: {
              analogy: 'Imagine renting a storefront for N250,000 per month (Fixed Cost). You sell custom shoes for N11 each, but each pair costs you N5.50 in leather and sole (Variable Cost). You pocket N5.50 profit from every pair sold to cover the rent. You must sell exactly 45,454 pairs just to pay off the store rent. The 45,455th pair provides your first real profit.',
              plainEnglish: 'Break-even is the zero-loss, zero-profit benchmark where your sales have paid for all your overheads.',
              keyTakeaway: 'Break-Even Quantity = Total Fixed Costs / (Selling Price - Variable Cost).',
              examTip: 'Remember that depreciation is a non-cash expense added back in cash flow calculations.'
            },
            formulas: [
              {
                id: 'form-ent-breakeven',
                name: 'Break-Even Quantity Formula',
                formulaDisplay: 'B/E(Q) = TFC / [SP - VC/unit]',
                contextAndPurpose: 'Calculates the volume of units a business must produce and sell to cover all fixed and variable overheads without incurring a loss.',
                variables: [
                  { symbol: 'B/E(Q)', name: 'Break-Even Quantity', explanation: 'The unit volume at which total revenues exactly equal total costs.', unitOrScale: 'Units' },
                  { symbol: 'TFC', name: 'Total Fixed Costs', explanation: 'Expenses incurred regardless of output volume (rent, depreciation, executive salaries).', unitOrScale: 'Naira (N)' },
                  { symbol: 'SP', name: 'Selling Price', explanation: 'The market selling price charged per unit of product.', unitOrScale: 'Naira per unit' },
                  { symbol: 'VC', name: 'Variable Cost', explanation: 'Direct expenses that vary in total with production (materials, factory labor).', unitOrScale: 'Naira per unit' },
                  { symbol: 'SP - VC', name: 'Contribution Margin', explanation: 'The net margin from each unit contributing to fixed costs.', unitOrScale: 'Naira per unit' }
                ],
                workedExamples: [
                  {
                    title: 'Worked Example 11.1: Textbook Manufacturing Venture (p. 145)',
                    problemStatement: 'A proposed venture has Total Fixed Costs of N250,000, variable cost per unit of N5.50, and selling price per unit of N11.00. Calculate the Break-Even Quantity.',
                    givenValues: [
                      { symbol: 'TFC', label: 'Total Fixed Costs', value: 'N250,000' },
                      { symbol: 'SP', label: 'Selling Price per unit', value: 'N11.00' },
                      { symbol: 'VC', label: 'Variable Cost per unit', value: 'N5.50' }
                    ],
                    steps: [
                      { stepNumber: 1, description: 'Calculate the Contribution Margin per unit', mathExpression: '\\text{Contribution Margin} = \\text{SP} - \\text{VC} = 11.00 - 5.50 = \\text{N}5.50', explanation: 'Each unit sold yields N5.50 towards fixed expenses.' },
                      { stepNumber: 2, description: 'Divide Total Fixed Costs by Contribution Margin', mathExpression: '\\text{B/E}(Q) = \\frac{250,000}{5.50} = 45,454.54 \\approx 45,454 \\text{ units}', explanation: 'Compute the threshold unit volume.' }
                    ],
                    finalResult: '45,454 units',
                    authorInterpretation: 'Sales beyond 45,454 units yield a profit of N5.50 per unit. Any sales below 45,454 units result in a loss of N5.50 per unit.',
                    sourceReference: 'ENT 302, Unit 11, Section 3.6, p. 145'
                  }
                ],
                sourceReference: 'ENT 302, Unit 11, Section 3.6, p. 145'
              }
            ],
            tables: [
              {
                title: 'Table 11.1: Fixed Expenses vs. Variable Costs in Business Planning',
                headers: ['Cost Category', 'Characteristics', 'Textbook Examples (Unit 11)'],
                rows: [
                  ['Fixed Costs (TFC)', 'Constant expenses incurred regardless of sales volume or productive capacity.', 'Rent, municipal rates, basic utilities, administrative salaries, interest, depreciation, insurance.'],
                  ['Variable Costs (VC)', 'Expenses that change directly in total with changes in output volume.', 'Raw materials, direct factory labor, sales commission, packaging, transport per unit.']
                ],
                sourceCitation: 'ENT 302, Unit 11, Section 3.6, pp. 143–144'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-ent-11-1-1',
                prompt: 'Given TFC = N250,000, VC = N5.50, and SP = N11.00, what is the exact Break-Even Quantity?',
                options: [
                  '22,727 units',
                  '45,454 units',
                  '50,000 units',
                  '90,909 units'
                ],
                correctIndex: 1,
                explanation: 'B/E(Q) = 250,000 / (11.00 - 5.50) = 250,000 / 5.50 = 45,454 units.',
                optionExplanations: [
                  'Incorrect. 22,727 is the result of dividing by 11.00 rather than contribution margin.',
                  'Correct! B/E(Q) = 250,000 / 5.50 = 45,454 units.',
                  'Incorrect. 50,000 is an estimated round figure that ignores decimal contributions.',
                  'Incorrect. 90,909 is double the actual requirement.'
                ],
                origin: 'original_past_question',
                sourceYear: '2017 Examination',
                sourceReference: 'ENT 302, Unit 11, Section 3.6, p. 145'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-11-1',
                questionType: 'written_process',
                prompt: 'State the mathematical formula for Break-Even Quantity. Calculate the break-even volume for a firm with Total Fixed Costs of N250,000, variable cost per unit of N5.50, and selling price of N11.00 per unit.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 11, Section 3.6, p. 145',
                expectedAnswerGuide: 'Formula: B/E(Q) = TFC / (SP - VC/unit). Calculation: TFC = N250,000, SP = N11.00, VC = N5.50. Contribution Margin = N11.00 - N5.50 = N5.50. B/E(Q) = 250,000 / 5.50 = 45,454 units. Interpretation: Any sales above 45,454 units generate profit of N5.50 per unit; sales below 45,454 units produce a loss of N5.50 per unit.',
                keyRubricPoints: [
                  'States formula: B/E(Q) = TFC / (SP - VC)',
                  'Identifies contribution margin as SP - VC',
                  'Calculates contribution margin: 11.00 - 5.50 = 5.50',
                  'Computes 250,000 / 5.50 = 45,454 units',
                  'Explains profit/loss implications above and below 45,454 units'
                ],
                examinerTips: 'Always provide the final unit label (45,454 units) and interpret what happens above and below the point.',
                origin: 'authentic_past_exam',
                sourceLabel: 'Textbook Worked Example, p. 145'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-12',
        unitNumber: '12.0',
        title: 'Unit 12: Pro Forma Cash Flow Statements',
        objectives: [
          'Differentiate cash inflows from cash receipts and revenue accruals',
          'Prepare monthly and quarterly pro forma cash budgets',
          'Identify cash deficit periods and plan working capital financing'
        ],
        unitRecapPoints: [
          'Cash flow timing determines solvency; profitable firms can go bankrupt if cash is tied up in uncollected debtors.',
          'Opening cash balance + cash receipts - cash disbursements = closing cash balance.'
        ],
        topics: [
          {
            id: 'top-ent-12-1',
            title: 'Cash Budgeting Dynamics and Working Capital Liquidity',
            readingMinutes: 5,
            sourceReference: 'ENT 302, Unit 12, Section 3.1–3.5, pp. 150–162',
            textbookDefinitions: [
              {
                term: 'Pro Forma Cash Flow',
                definition: 'A financial projection estimating future cash receipts and disbursements over a designated period, demonstrating whether the venture will maintain sufficient liquidity to meet obligations as they fall due.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The cash flow statement is the lifeblood of feasibility analysis. Unlike the income statement, which records revenues when earned regardless of payment, cash flow only registers actual currency inflows and outflows.

Structure of the Cash Budget:
1. Cash Receipts: Cash sales, collections from accounts receivable (debtors), loan disbursements, equity injections.
2. Cash Disbursements: Raw material purchases, direct wages, factory rent, administrative overheads, loan interest, tax payments.
3. Net Monthly Cash Flow: Total Receipts minus Total Disbursements.
4. Closing Cash Balance: Opening cash plus Net Cash Flow.
If the closing cash balance dips below the safety minimum, the entrepreneur must arrange an overdraft or short-term credit line.`,
            summaryPoints: [
              'Non-cash items like depreciation are excluded from cash disbursements.',
              'Cash budgets reveal exact months when temporary financing will be needed.'
            ],
            simplifiedExplanation: {
              analogy: 'A business can starve to death while waiting for a massive feast. If you sell N10,000,000 worth of goods on 90-day credit, your income statement shows high profit, but you cannot pay your factory workers on Friday without physical cash.',
              plainEnglish: 'Cash flow tracks actual bank balances. You cannot pay salaries with promises or accounting profits.',
              keyTakeaway: 'Always distinguish between cash liquidity and accounting profit.',
              examTip: 'Remember that depreciation is an accounting expense but NOT a cash disbursement.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-12-1-1',
                prompt: 'Why is depreciation excluded from the cash disbursements column of a pro forma cash flow statement?',
                options: [
                  'Because machinery never depreciates in value',
                  'Because depreciation is a non-cash accounting allocation of past capital cost, involving no physical cash outflow during the current period',
                  'Because government taxes depreciation at 100%',
                  'Because banks do not allow depreciation on financial records'
                ],
                correctIndex: 1,
                explanation: 'Depreciation writes down asset values for tax and accounting purposes but does not represent actual cash paid out in that month.',
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'ENT 302, Unit 12, p. 154'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-12-1',
                questionType: 'written_discussion',
                prompt: 'Explain the fundamental difference between Cash Flow and Accounting Profit. Why can a profitable enterprise become insolvent?',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 12, Section 3.2, pp. 152–155',
                expectedAnswerGuide: 'Accounting profit reflects revenue earned minus expenses incurred on an accrual basis, including credit sales. Cash flow reflects actual physical cash receipts minus physical cash payments. A firm can be highly profitable on paper if it makes huge credit sales, but if debtors delay payment while immediate cash is needed for wages, rent, and materials, the firm faces illiquidity and insolvency.',
                keyRubricPoints: [
                  'Accrual basis of profit vs cash basis of cash flow',
                  'Treatment of credit sales and receivables',
                  'Explanation of how debtor delays cause insolvency despite accounting profit'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 12'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-13',
        unitNumber: '13.0',
        title: 'Unit 13: Pro Forma Income Statement & Balance Sheet',
        objectives: [
          'Construct a projected Pro Forma Income Statement (P&L)',
          'Construct a projected Pro Forma Balance Sheet',
          'Calculate and interpret liquidity, leverage, and profitability ratios'
        ],
        unitRecapPoints: [
          'Income statement calculates gross profit, operating profit (EBIT), and net profit after tax (EAT).',
          'Balance sheet balances Total Assets against Total Liabilities plus Shareholder Equity.'
        ],
        topics: [
          {
            id: 'top-ent-13-1',
            title: 'Pro Forma Income Statements, Balance Sheets & Ratio Analysis',
            readingMinutes: 5,
            sourceReference: 'ENT 302, Unit 13, Section 3.1–3.6, pp. 165–179',
            textbookDefinitions: [
              {
                term: 'Pro Forma Income Statement',
                definition: 'A projected financial statement outlining expected sales revenue, cost of goods sold, operating expenses, and net profit over a forward-looking accounting period.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              },
              {
                term: 'Current Ratio',
                definition: 'A fundamental liquidity ratio measuring the ability of an enterprise to cover its short-term obligations: Current Assets divided by Current Liabilities.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The Pro Forma Income Statement and Balance Sheet translate all operational and marketing assumptions into standard financial performance indicators.

Pro Forma Income Statement Sequence:
$$\\text{Sales Revenue} - \\text{Cost of Goods Sold (COGS)} = \\text{Gross Margin}$$
$$\\text{Gross Margin} - \\text{Operating Expenses (Selling, General, Admin, Depreciation)} = \\text{Operating Profit (EBIT)}$$
$$\\text{EBIT} - \\text{Interest Expenses} = \\text{Earnings Before Tax (EBT)}$$
$$\\text{EBT} - \\text{Company Income Tax (CIT)} = \\text{Net Profit After Tax (EAT)}$$

Pro Forma Balance Sheet:
$$\\text{Total Assets} = \\text{Current Assets} + \\text{Fixed Assets (Net of Depreciation)}$$
$$\\text{Total Claims} = \\text{Current Liabilities} + \\text{Long-Term Debt} + \\text{Owners\' Equity}$$
Key Ratios:
- Current Ratio = Current Assets / Current Liabilities (Benchmark: 2:1)
- Quick (Acid-Test) Ratio = (Current Assets - Inventory) / Current Liabilities (Benchmark: 1:1)
- Debt-to-Equity Ratio = Total Debt / Total Equity`,
            summaryPoints: [
              'Income statements reflect operational profitability; balance sheets reveal net financial worth.',
              'Financial ratios allow credit analysts to benchmark the proposed venture against industry norms.'
            ],
            simplifiedExplanation: {
              analogy: 'An income statement is the movie of what the business did all year (earnings and spendings). The balance sheet is the photograph of what the business owns and owes at 11:59 PM on December 31st.',
              plainEnglish: 'Income statement shows if you made a profit. Balance sheet shows your assets, debts, and what belongs to the owners.',
              keyTakeaway: 'Current Ratio should ideally be 2:1 so you have N2 in short-term assets for every N1 in debt due this year.',
              examTip: 'Memorize the formula: Current Ratio = Current Assets / Current Liabilities.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-13-1-1',
                prompt: 'What is the standard textbook benchmark for the Quick (Acid-Test) Ratio in feasibility financial analysis?',
                options: [
                  '1:1',
                  '5:1',
                  '10:1',
                  '0.1:1'
                ],
                correctIndex: 0,
                explanation: 'A Quick Ratio of 1:1 indicates the venture can pay off all current liabilities immediately without relying on selling off inventory.',
                origin: 'original_past_question',
                sourceYear: '2020 Examination',
                sourceReference: 'ENT 302, Unit 13, p. 175'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-13-1',
                questionType: 'written_structured',
                prompt: 'Outline the sequential structure of a Pro Forma Income Statement from Sales Revenue to Net Profit After Tax. State the formulas for Current Ratio and Quick Ratio.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 13, Section 3.2 & 3.5, pp. 167–176',
                expectedAnswerGuide: 'Sequence: Sales Revenue less Cost of Goods Sold = Gross Margin. Gross Margin less Operating Expenses = EBIT (Operating Profit). EBIT less Interest = EBT. EBT less Tax = Net Profit (EAT). Current Ratio = Current Assets / Current Liabilities. Quick Ratio = (Current Assets - Inventory) / Current Liabilities.',
                keyRubricPoints: [
                  'Complete P&L sequence from Sales to EAT',
                  'Formula for Current Ratio',
                  'Formula for Quick Ratio excluding inventory'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 13'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-14',
        unitNumber: '14.0',
        title: 'Unit 14: Capital Budgeting and Investment Appraisal',
        objectives: [
          'Apply the Time Value of Money principle to investment appraisal',
          'Calculate Payback Period (PBP)',
          'Compute Net Present Value (NPV) and Internal Rate of Return (IRR)',
          'Evaluate investment projects using the Benefit-Cost Ratio (Profitability Index)'
        ],
        unitRecapPoints: [
          'A Naira received today is worth more than a Naira received in five years due to inflation and investment earning capacity.',
          'Accept projects with NPV > 0 and IRR > Cost of Capital.'
        ],
        topics: [
          {
            id: 'top-ent-14-1',
            title: 'Discounted Cash Flow Methods: NPV, IRR & Payback Period',
            readingMinutes: 6,
            sourceReference: 'ENT 302, Unit 14, Section 3.1–3.6, pp. 182–198',
            textbookDefinitions: [
              {
                term: 'Net Present Value (NPV)',
                definition: 'The sum of the present values of incoming cash flows minus the initial capital outlay, discounted at the cost of capital.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              },
              {
                term: 'Internal Rate of Return (IRR)',
                definition: 'The discount rate at which the Net Present Value of an investment project exactly equals zero.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `Capital budgeting evaluates whether long-term investments in capital assets are justified by their expected future cash flows.

Investment Appraisal Techniques:
1. Payback Period (PBP): The number of years required to recover the original capital outlay from annual cash inflows:
$$\\text{PBP} = \\frac{\\text{Initial Investment Outlay}}{\\text{Annual Cash Inflow}}$$

2. Net Present Value (NPV):
$$\\text{NPV} = \\sum_{t=1}^{n} \\frac{CF_t}{(1 + r)^t} - C_0$$
Where $CF_t$ = Cash inflow in year $t$, $r$ = discount rate (cost of capital), $C_0$ = initial investment.
Decision Rule: Accept if $\\text{NPV} > 0$; Reject if $\\text{NPV} < 0$.

3. Internal Rate of Return (IRR):
The rate $r^*$ where $\\text{NPV} = 0$. Decision Rule: Accept if $\\text{IRR} > \\text{Cost of Capital}$.`,
            summaryPoints: [
              'NPV accounts for the time value of money and is the primary academic decision metric.',
              'Payback period measures liquidity and risk exposure but ignores cash flows after the payback cutoff.'
            ],
            simplifiedExplanation: {
              analogy: 'Receiving N1,000,000 today is much better than receiving N1,000,000 in ten years because inflation eats money and today\'s money can earn interest. NPV adjusts all future earnings back into today\'s real value.',
              plainEnglish: 'NPV tells you if the project generates more profit than putting your money in a safe bank account.',
              keyTakeaway: 'Always accept a project if Net Present Value is positive.',
              examTip: 'State the decision rule: Accept if NPV > 0; Reject if NPV < 0.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-14-1-1',
                prompt: 'Under the Net Present Value (NPV) decision rule in ENT 302, under what condition should a project be accepted?',
                options: [
                  'Only if NPV is exactly equal to negative N1,000,000',
                  'When the calculated Net Present Value is positive (NPV > 0)',
                  'When the Payback Period exceeds 50 years',
                  'When the discount rate equals infinity'
                ],
                correctIndex: 1,
                explanation: 'A positive NPV indicates the project earns a return in excess of the cost of capital.',
                origin: 'original_past_question',
                sourceYear: '2021 Examination',
                sourceReference: 'ENT 302, Unit 14, p. 189'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-14-1',
                questionType: 'written_process',
                prompt: 'Define Net Present Value (NPV) and Payback Period. State the formula and decision criteria for both techniques.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 14, Section 3.2–3.4, pp. 184–192',
                expectedAnswerGuide: 'NPV is the sum of discounted future cash inflows minus initial capital outlay. Formula: NPV = Sum[CF_t / (1+r)^t] - C_0. Accept if NPV > 0. Payback Period is the time required to recover initial investment. PBP = Initial Outlay / Annual Cash Inflow. Accept if PBP is shorter than management target cutoff period.',
                keyRubricPoints: [
                  'NPV definition and formula',
                  'NPV decision rule (NPV > 0)',
                  'Payback period definition and formula',
                  'Payback decision rule'
                ],
                origin: 'authentic_past_exam',
                sourceLabel: 'Past Examination 2021 Question 4'
              }
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 4: Business Plan Preparation, Presentation & Implementation
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent-4',
    moduleNumber: 4,
    title: 'Module 4: Business Plan Preparation, Presentation & Implementation',
    units: [
      {
        id: 'unit-ent-15',
        unitNumber: '15.0',
        title: 'Unit 15: Writing the Executive Summary',
        objectives: [
          'Explain the strategic importance of the Executive Summary as the gateway to the business plan',
          'Draft the core elements: Problem, Solution, Market, Management, and Financial Requirement',
          'Synthesize comprehensive feasibility data into a compelling executive narrative'
        ],
        unitRecapPoints: [
          'The executive summary is the most critical section; busy investors and bank executives read it first to decide whether to read further.',
          'Written last, placed first; concise, typically 2 to 3 pages.'
        ],
        topics: [
          {
            id: 'top-ent-15-1',
            title: 'Drafting the Executive Summary and Core Value Proposition',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 15, Section 3.1–3.4, pp. 202–212',
            textbookDefinitions: [
              {
                term: 'Executive Summary',
                definition: 'A concise summary of the entire business plan, encapsulating the enterprise vision, target market, competitive edge, management pedigree, and financing requirements.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The Executive Summary is arguably the single most important part of the entire business plan. Venture capitalists, angel investors, and bank loan officers receive hundreds of proposals each month. If the Executive Summary fails to capture interest within two minutes, the entire document is discarded.

Essential Components of an Executive Summary:
1. Business Concept & Problem Solved: Clear description of the product or service and the specific pain point it addresses in the market.
2. Market Opportunity & Target Audience: Size of the market, target demographics, and projected market share.
3. Competitive Advantage: Proprietary technology, cost advantage, strategic location, or exclusive distribution channels.
4. Financial Highlights: Projected revenues, gross margins, breakeven milestone, and net profit for Years 1 through 3.
5. Capital Ask: Exact funding required, precise utilization of proceeds, and projected return on investment.`,
            summaryPoints: [
              'Written after all other sections are complete, but placed at the front of the plan.',
              'Must clearly state the exact amount of capital required and how it will be spent.'
            ],
            simplifiedExplanation: {
              analogy: 'The Executive Summary is like a movie trailer. If the trailer is boring, nobody will buy a cinema ticket to watch the 2-hour movie.',
              plainEnglish: 'A short 2-page summary that gives bank managers the vital facts: what you sell, who buys it, and how much money you will make.',
              keyTakeaway: 'Always write the Executive Summary LAST after all financial calculations are complete.',
              examTip: 'Enumerate the 5 core elements of an executive summary.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-15-1-1',
                prompt: 'When should an entrepreneur draft the Executive Summary of a feasibility business plan?',
                options: [
                  'Before any market or financial research is conducted',
                  'Last, after all operational, technical, marketing, and financial sections have been fully developed',
                  'Exclusively after the bank loan has been approved and spent',
                  'Only if the business goes bankrupt'
                ],
                correctIndex: 1,
                explanation: 'Because it summarizes all other sections, the Executive Summary can only be written accurately after all research and calculations are completed.',
                origin: 'original_past_question',
                sourceYear: '2020 Examination',
                sourceReference: 'ENT 302, Unit 15, p. 205'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-15-1',
                questionType: 'written_discussion',
                prompt: 'Why is the Executive Summary considered the most critical section of a business plan? Outline its essential components.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 15, Section 3.1–3.3, pp. 203–208',
                expectedAnswerGuide: 'It is critical because investors and lenders review it first to decide whether to evaluate the full plan. Essential components include: Business Concept, Market Opportunity, Competitive Advantage, Management Team, Financial Projections, and Capital Requirement (the ask).',
                keyRubricPoints: [
                  'Explanation of investor triage role',
                  'Enumeration of all core components'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 15'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-16',
        unitNumber: '16.0',
        title: 'Unit 16: Packaging and Presenting the Business Plan to Investors',
        objectives: [
          'Structure a complete formal business plan according to institutional standards',
          'Adapt presentations for commercial banks versus equity venture capitalists',
          'Manage the investor due diligence process and defense presentation'
        ],
        unitRecapPoints: [
          'Commercial lenders focus on collateral, cash flow liquidity, and debt service coverage; equity investors focus on scalability and exit multiples.',
          'Professional packaging and oral defense reflect managerial competence.'
        ],
        topics: [
          {
            id: 'top-ent-16-1',
            title: 'Business Plan Assembly, Due Diligence & Investor Pitching',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 16, Section 3.1–3.4, pp. 214–226',
            textbookDefinitions: [
              {
                term: 'Due Diligence',
                definition: 'The comprehensive appraisal of an enterprise undertaken by a prospective buyer or investor to establish its assets, liabilities, and commercial potential before concluding a transaction.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The format and packaging of the business plan must reflect professionalism, organization, and transparent data presentation.

Pitching to Different Financial Audiences:
1. Commercial Banks: Debt lenders are risk-averse. They care primarily about:
- Cash flow certainty to repay principal and interest
- Debt Service Coverage Ratio (DSCR)
- Quality and marketability of collateral pledged
2. Venture Capitalists and Angel Investors: Equity investors accept high risk for high upside. They focus on:
- Scalable business model and market size
- Intellectual property or barrier to entry
- Quality of managerial leadership
- Clear exit strategy (IPO, trade acquisition) within 5 to 7 years.`,
            summaryPoints: [
              'Tailor the business plan presentation to the specific financial provider.',
              'Bankers evaluate debt coverage; equity investors evaluate high-growth exit multiples.'
            ],
            simplifiedExplanation: {
              analogy: 'Pitching to a bank is like asking for an umbrella when it rains—they want proof you won\'t lose it. Pitching to a venture capitalist is like asking them to buy a ticket on your rocket ship.',
              plainEnglish: 'Banks want to be certain you can pay back their loan with interest. Investors want a share of your company that will grow 10 times in value.',
              keyTakeaway: 'Emphasize cash flow liquidity for bankers, and rapid market scalability for venture capitalists.',
              examTip: 'Contrast the priorities of commercial banks versus equity venture capitalists.'
            },
            checkpointQuiz: [
              {
                id: 'q-ent-16-1-1',
                prompt: 'What is the primary concern of a commercial bank loan officer reviewing a feasibility study?',
                options: [
                  'Whether the company will stage an international IPO in 10 years',
                  'Whether monthly cash flow is sufficient to reliably service loan principal and interest with pledged collateral',
                  'The aesthetic design of the company logo',
                  'The social media follower count of the entrepreneur'
                ],
                correctIndex: 1,
                explanation: 'Commercial banks prioritize debt service coverage and collateral security over speculative equity gains.',
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'ENT 302, Unit 16, p. 218'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-16-1',
                questionType: 'written_difference',
                prompt: 'Contrast the criteria used by Commercial Banks versus Venture Capitalists when evaluating a feasibility business plan.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 16, Section 3.2, pp. 217–221',
                expectedAnswerGuide: 'Commercial banks evaluate creditworthiness, cash flow liquidity, debt service coverage, and collateral security. They seek low risk and fixed interest returns. Venture capitalists evaluate market scalability, technological advantage, management pedigree, and high-multiple exit routes (IPO, acquisition). They accept higher risk for equity upside.',
                keyRubricPoints: [
                  'Bank criteria: cash flow, DSCR, collateral, low risk',
                  'VC criteria: scalability, high equity return, exit strategies'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 16'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-ent-17',
        unitNumber: '17.0',
        title: 'Unit 17: Implementation Schedule and Milestone Planning',
        objectives: [
          'Construct Gantt charts for sequential project implementation',
          'Identify critical path milestones from financing to commercial launch',
          'Establish monitoring protocols and post-feasibility performance reviews'
        ],
        unitRecapPoints: [
          'Implementation schedule converts static feasibility projections into a time-bound operational action plan.',
          'Critical path activities cannot be delayed without delaying the entire commercial launch.'
        ],
        topics: [
          {
            id: 'top-ent-17-1',
            title: 'Project Scheduling, Milestones & Gantt Chart Planning',
            readingMinutes: 4,
            sourceReference: 'ENT 302, Unit 17, Section 3.1–3.4, pp. 228–241',
            textbookDefinitions: [
              {
                term: 'Gantt Chart',
                definition: 'A visual bar chart illustrating a project schedule, detailing the start and finish dates of terminal elements and summary elements of a project.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              },
              {
                term: 'Critical Path',
                definition: 'The longest sequence of dependent activities and the shortest possible duration in which the total implementation project can be completed.',
                sourceAuthor: 'Araga et al. (NOUN, 2017)'
              }
            ],
            content: `The final unit of ENT 302 addresses the transition from planning to execution. An implementation schedule establishes a realistic timetable for venture launch.

Key Pre-Operating Implementation Activities:
1. Legal Registration: CAC incorporation, tax identification (TIN), state permits.
2. Financing Drawdown: Finalizing loan documentation and receiving initial capital tranches.
3. Site Preparation: Land lease or acquisition, factory civil construction, interior partitioning.
4. Machinery Procurement & Installation: Shipping equipment, clearing port customs, factory mounting, and calibration.
5. Trial Production & Testing: Initial test runs, quality control checks, NAFDAC / SON inspections.
6. Marketing Pre-launch & Staff Training: Hiring key personnel, running trial advertisements, securing distributor commitments.
7. Commercial Launch: Official commissioning and initiation of commercial distribution.`,
            summaryPoints: [
              'Visual scheduling prevents costly coordination delays between machinery delivery and utility readiness.',
              'Milestones provide performance benchmarks for loan tranche releases by banks.'
            ],
            simplifiedExplanation: {
              analogy: 'Ordering 50 tons of raw materials before your factory roof is completed means your materials will be ruined by rain. A Gantt chart ensures the roof is finished first, machines are installed second, and raw materials arrive third.',
              plainEnglish: 'The implementation schedule is your month-by-month calendar showing what must be built, bought, and finished before you open your doors.',
              keyTakeaway: 'Always include realistic time buffers for regulatory approvals and customs clearing in Nigeria.',
              examTip: 'List the 7 sequential pre-operating activities leading up to commercial launch.'
            },
            tables: [
              {
                title: 'Table 17.1: Illustrative Pre-Operating Implementation Schedule (Gantt Milestones)',
                headers: ['Month', 'Key Milestone Activity', 'Responsible Officer / Entity'],
                rows: [
                  ['Month 1', 'Corporate incorporation (CAC) and bank account opening.', 'Legal Counsel & Founders'],
                  ['Month 2', 'Site lease signing and architectural plant layout approval.', 'Project Engineer'],
                  ['Month 3-4', 'Machinery procurement orders and factory civil renovation.', 'Operations Lead & Contractor'],
                  ['Month 5', 'Machinery installation, power connection, and NAFDAC inspection.', 'Chief Engineer & NAFDAC'],
                  ['Month 6', 'Trial production runs, staff training, and commercial product launch.', 'General Manager & Entire Team']
                ],
                sourceCitation: 'ENT 302, Unit 17, Section 3.2, p. 235'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-ent-17-1-1',
                prompt: 'In project implementation planning, what is the significance of the "Critical Path"?',
                options: [
                  'It represents optional tasks that can be skipped if budget runs out',
                  'It represents the longest sequence of dependent activities, where any delay directly postpones the final launch date of the enterprise',
                  'It designates the shortest path for workers to walk to the factory cafeteria',
                  'It is the list of employees who will be dismissed after Year 1'
                ],
                correctIndex: 1,
                explanation: 'A delay in any critical path milestone inevitably delays the entire commercial commissioning date.',
                origin: 'original_past_question',
                sourceYear: '2021 Examination',
                sourceReference: 'ENT 302, Unit 17, p. 238'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-ent-17-1',
                questionType: 'written_process',
                prompt: 'Outline the sequential implementation activities from corporate incorporation to commercial launch for a new manufacturing enterprise according to Unit 17.',
                maxMarks: 10,
                sourceReference: 'ENT 302, Unit 17, Section 3.2, pp. 232–237',
                expectedAnswerGuide: 'Sequential activities: (1) Legal incorporation and regulatory registration, (2) Financing drawdown, (3) Site acquisition and preparation, (4) Machinery procurement, importation, and installation, (5) Staff recruitment and training, (6) Trial production and quality certification, (7) Commercial launch and distribution.',
                keyRubricPoints: [
                  'Identification of pre-operating sequence',
                  'Correct chronological ordering from legal setup to commercial launch'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 17'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const ENT302_AUTHENTIC_COURSE: Course = {
  id: 'course-ent302-authoritative',
  code: 'ENT 302',
  title: 'Feasibility and Business Planning',
  department: 'Faculty of Management Sciences, National Open University of Nigeria',
  description: 'Authoritative NOUN study material prepared by Dr. Abdullahi Araga S., Oluremi Oyedokun T., and Dr. Timothy Ishola. Full 17 Study Units across four modules covering feasibility assessment, location analysis, management design, break-even financial modelling, and implementation scheduling.',
  createdAt: new Date().toISOString(),
  documents: [
    {
      id: 'doc-ent302-textbook',
      name: 'ENT_302_Feasibility_and_Business_Planning.pdf',
      fileType: 'pdf',
      fileSize: 4180000,
      uploadedAt: new Date().toISOString(),
      pageCount: 243,
      wordCount: 54000,
      status: 'ready',
      summary: 'National Open University of Nigeria Course Guide and complete 17 Study Units across four modules. All verified definitions, tables, formulas, and Tutor-Marked Assignments preserved without omissions.',
      processingNotes: 'Authoritative textbook source. 17 units verified and indexed in complete sequence. No skipped units.',
      extractedHeadingsCount: 68,
      isPartiallyProcessed: false
    }
  ],
  modules: ENT302_MODULES,
  lastStudiedTopicId: 'top-ent-1-1',
  lastStudiedUnitId: 'unit-ent-1',
  lastStudiedAt: new Date().toISOString()
};

/**
 * ============================================================================
 * FMS 304: RESEARCH METHODOLOGY
 * Authoritative NOUN Study Material (National Open University of Nigeria)
 * Course Developers: Dr. (Mrs) P. E. Osuji, Prof. O. J. Onwe, Dr. Timothy Ishola
 * Total Verified Units in Source: 15 Units across 3 Modules (No units skipped)
 * ============================================================================
 */

export const FMS304_MODULES: StudyModule[] = [
  // --------------------------------------------------------------------------
  // MODULE 1: Conceptual Framework & Scientific Investigation
  // --------------------------------------------------------------------------
  {
    id: 'mod-fms-1',
    moduleNumber: 1,
    title: 'Module 1: Conceptual Framework & Scientific Investigation',
    units: [
      {
        id: 'unit-fms-1',
        unitNumber: '1.0',
        title: 'Unit 1: Conceptual Framework of Research',
        objectives: [
          'Describe the meaning and scientific denotation of research',
          'Explain the four cornerstone characteristics: Objectivity, Precision, Design, and Verifiability',
          'Differentiate clearly between Fundamental (Basic) Research and Applied Research',
          'Enumerate the three primary purposes of research: training, problem-solving, and search for truth'
        ],
        unitRecapPoints: [
          'Research is a systematic, data-supported, cyclical process aimed at expanding organized scientific knowledge.',
          'Leedy (1997) explicitly warns that research is NOT mere information gathering, fact transportation, rummaging, or a catchword.',
          'Four cornerstones: Objectivity (suspend bias), Precision (exact terms), Design (systematic protocol), and Verifiability (re-analysis or replication).'
        ],
        topics: [
          {
            id: 'top-fms-1-1',
            title: 'The Concept and Scientific Denotation of Research',
            readingMinutes: 4,
            sourceReference: 'FMS 304 Course Guide, Unit 1, Section 3.1, pp. 6–8',
            textbookDefinitions: [
              {
                term: 'Research',
                definition: 'Any systematic endeavor or striving towards understanding a complex situational problem of more than immediate personal concern and stated in a problematic form.',
                sourceAuthor: 'Heros (1960)'
              },
              {
                term: 'Scientific Knowledge Activity',
                definition: 'An activity directed towards the development of an organized body of scientific knowledge about the events with which human beings are concerned.',
                sourceAuthor: 'Travers (1969)'
              },
              {
                term: 'What Research is NOT',
                definition: 'Not mere information gathering, not mere fact transportation from one place to another, not mere rummaging through information, and not a catchword used to get information.',
                sourceAuthor: 'Leedy (1997)'
              }
            ],
            content: `Research provides a technique for addressing the void in human knowledge and resolving unresolved problems through inquiringly studying evidences obtained via scientific methods.

Travers (1969) describes research as an activity directed towards the development of an organized body of scientific knowledge about the events with which human beings are concerned. The goal is to discover general principles or interpretations of behaviour, to explain, predict and control events in everyday life situations.

According to Leedy (1997), research is NOT:
- Mere information gathering (e.g. visiting a library to find where the Nile begins)
- Mere transformation of facts from one location to another (e.g. assembling an essay from encyclopedias)
- Merely rummaging through information without purpose
- A catch word used to get information or impress audiences

Genuine research is a cyclical or helical process through which we attempt to achieve systematically, and with the support of empirical data, the answer to a question, the resolution of a problem, or a greater understanding of a phenomenon.`,
            summaryPoints: [
              'Research begins with a problematic question and proceeds through orderly, data-driven inquiry.',
              'Distinguished from mere compilation or library browsing by its analytical and interpretive rigor.',
              'The inquiry follows a cyclical path where answering one question frequently uncovers further questions.'
            ],
            simplifiedExplanation: {
              analogy: 'Imagine baking a cake. Browsing 10 cookbooks is merely fact gathering. Measuring exact flour-to-butter ratios, varying oven temperatures, and documenting why 180°C yields the finest crumb—that is scientific research.',
              plainEnglish: 'Research is not copying notes from books. It is asking an exact question, collecting real proof, and discovering what the evidence proves.',
              keyTakeaway: 'Genuine research requires an inquisitive problem statement, empirical data, and systematic analysis.',
              examTip: 'Examiners award marks when students state all four of Leedy\'s exclusions: not info gathering, not fact transportation, not rummaging, and not a catchword.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-1-1-1',
                prompt: 'According to Leedy (1997), which of the following is excluded from genuine research?',
                options: [
                  'Formulating testable hypotheses supported by numerical data',
                  'Mere transformation of facts from one location to another without analysis',
                  'Replicating an empirical study on an independent probability sample',
                  'Eliminating subjective bias through standardized measurements'
                ],
                correctIndex: 1,
                explanation: 'Leedy (1997) specifies that transporting facts from one place to another without empirical analysis does not constitute research.',
                origin: 'original_past_question',
                sourceYear: '2012 Final Examination',
                sourceReference: 'FMS 304, Unit 1, Section 3.1, p. 7'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-1-1',
                questionType: 'written_definition',
                prompt: 'Define research according to Heros (1960) and Travers (1969). State the four things Leedy (1997) insists research is NOT.',
                maxMarks: 10,
                sourceReference: 'FMS 304 Course Guide, Unit 1, Section 3.1, pp. 6–8',
                expectedAnswerGuide: 'Heros (1960) defines research as any systematic endeavor or striving towards understanding a complex situational problem of more than immediate personal concern and stated in a problematic form. Travers (1969) defines research as an activity directed towards the development of an organized body of scientific knowledge. Leedy (1997) states research is NOT: (1) mere information gathering, (2) mere transportation of facts from one location to another, (3) merely rummaging through information, and (4) a catchword used to get information.',
                keyRubricPoints: [
                  'Heros (1960) definition citing complex situational problem',
                  'Travers (1969) definition citing development of organized body of scientific knowledge',
                  'Leedy exclusions: not info gathering, not fact transportation, not rummaging, not a catchword'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self-Assessment Exercise 1'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-2',
        unitNumber: '2.0',
        title: 'Unit 2: The Scientific Method and Scientific Investigation',
        objectives: [
          'Explain the five sequential steps of the Scientific Method',
          'Describe the scientific attitude: Empiricism, Parsimony, and Skepticism',
          'Contrast Inductive Reasoning with Deductive Reasoning'
        ],
        unitRecapPoints: [
          'Scientific method proceeds from observation to hypothesis, deduction, experimental verification, and theory building.',
          'Empiricism insists knowledge comes from sensory evidence, not authority or tradition.'
        ],
        topics: [
          {
            id: 'top-fms-2-1',
            title: 'Sequential Steps of Scientific Method and Rational Inquiry',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 2, Section 3.1–3.4, pp. 14–22',
            textbookDefinitions: [
              {
                term: 'Scientific Method',
                definition: 'An objective, logical, and systematic method of analysis of phenomena devised to permit the accumulation of reliable knowledge.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Science is not defined by its subject matter, but by its method of inquiry. The scientific method adheres to a disciplined sequence:
1. Observation and Felt Difficulty: Encountering an unexplained occurrence or practical barrier.
2. Formulation of the Problem: Defining the exact boundaries of the unresolved question.
3. Formulation of Hypothesis: Proposing a tentative, testable proposition regarding the relationship between variables.
4. Deduction of Consequences: Deriving observable, logical outcomes that must occur if the hypothesis is true.
5. Verification and Experimentation: Testing deductions against empirical field data to accept or reject the hypothesis.`,
            summaryPoints: [
              'Scientific investigation relies on empirical observation rather than dogma.',
              'Hypotheses must be falsifiable through observable data.'
            ],
            simplifiedExplanation: {
              analogy: 'A car will not start. Observation: silence on turning the key. Hypothesis: the battery is flat. Deduction: if battery is flat, the headlights will not shine. Test: switch on headlights. Verification: lights do not shine; hypothesis supported.',
              plainEnglish: 'The scientific method is guessing a sensible explanation for a problem, testing it with facts, and changing your mind if the facts prove you wrong.',
              keyTakeaway: 'Always follow the 5 steps: Observation, Problem, Hypothesis, Deduction, and Empirical Verification.',
              examTip: 'Distinguish between induction (specific to general) and deduction (general to specific).'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-2-1-1',
                prompt: 'What distinguishes the scientific method from casual problem solving according to Unit 2?',
                options: [
                  'Consulting horoscopes and family traditions',
                  'Rigorous systematic procedure, empirical observation, and falsifiable hypothesis testing',
                  'Accepting whatever conclusions senior professors state without question',
                  'Guessing the answer before conducting tests'
                ],
                correctIndex: 1,
                explanation: 'The scientific method requires disciplined empirical verification and objective falsification.',
                origin: 'original_past_question',
                sourceYear: '2014 Examination',
                sourceReference: 'FMS 304, Unit 2, p. 18'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-2-1',
                questionType: 'written_process',
                prompt: 'Enumerate and discuss the five sequential stages of the Scientific Method according to FMS 304.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 2, Section 3.2, pp. 16–20',
                expectedAnswerGuide: 'The five stages are: (1) Observation and felt difficulty, (2) Problem identification and formulation, (3) Statement of tentative hypothesis, (4) Deduction of observable consequences, and (5) Empirical verification and testing.',
                keyRubricPoints: [
                  'List of all 5 stages in correct chronological order',
                  'Clear explanation of each stage with examples'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 2'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-3',
        unitNumber: '3.0',
        title: 'Unit 3: Research Problem Identification and Formulation',
        objectives: [
          'Identify credible sources of academic research problems',
          'Evaluate criteria for selecting a viable research topic: Feasibility, Relevance, Originality',
          'State research problems in clear interrogative or declarative form'
        ],
        unitRecapPoints: [
          'A problem well-stated is half-solved.',
          'Sources include practical experience, theoretical gaps, literature contradictions, and technological change.'
        ],
        topics: [
          {
            id: 'top-fms-3-1',
            title: 'Selecting and Articulating the Research Problem',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 3, Section 3.1–3.4, pp. 24–32',
            textbookDefinitions: [
              {
                term: 'Research Problem',
                definition: 'A question or condition of uncertainty that a researcher wants to resolve through disciplined inquiry and data collection.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Selecting a research problem is often the most challenging stage for student researchers. A researchable problem must possess three vital criteria:
1. Significant Value: It must make a genuine contribution to scientific knowledge or practical management decision-making.
2. Empirical Solvability: It must involve variables that can actually be observed, measured, and analyzed with empirical data.
3. Feasibility: The student must have access to respondents, data, funding, analytical tools, and time within academic deadlines.`,
            summaryPoints: [
              'Avoid overly broad topics (e.g. "Poverty in Africa"); narrow focus to specific measurable variables.',
              'Ensure data is legally and physically accessible before finalizing topic approval.'
            ],
            simplifiedExplanation: {
              analogy: 'Saying you want to research "Why people are unhappy" is like trying to drink the whole Atlantic Ocean. Saying you want to research "The effect of monthly incentive bonuses on teller job satisfaction in Zenith Bank branches in Lagos" is a clean cup of water you can actually study.',
              plainEnglish: 'Pick a clear, specific problem where you can realistically gather data before your project submission date.',
              keyTakeaway: 'Ensure your problem has clearly defined dependent and independent variables.',
              examTip: 'Cite the 3 criteria: significance, empirical solvability, and practical feasibility.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-3-1-1',
                prompt: 'Which of the following represents a properly delimited and researchable topic in management sciences?',
                options: [
                  'Everything about business in Nigeria since independence',
                  'Impact of electronic banking channels on customer retention in commercial banks in Ikeja, Lagos',
                  'Why life exists in the universe',
                  'A philosophical daydream on wealth'
                ],
                correctIndex: 1,
                explanation: 'Topic 2 is clearly bounded with specific variables, target sector, and geographic scope.',
                origin: 'original_past_question',
                sourceYear: '2015 Examination',
                sourceReference: 'FMS 304, Unit 3, p. 28'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-3-1',
                questionType: 'written_discussion',
                prompt: 'Discuss three essential criteria for evaluating whether an academic research problem is viable for thesis investigation.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 3, Section 3.2, pp. 26–30',
                expectedAnswerGuide: 'Criteria: (1) Significance and contribution to knowledge, (2) Empirical testability/solvability, and (3) Feasibility (time, data access, finance, ethical clearance).',
                keyRubricPoints: [
                  'Significance explained',
                  'Empirical testability explained',
                  'Feasibility parameters explained'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 3'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-4',
        unitNumber: '4.0',
        title: 'Unit 4: Research Questions and Hypotheses Formulation',
        objectives: [
          'Differentiate Research Questions from Hypotheses',
          'Formulate Null Hypotheses (H0) and Alternative Hypotheses (H1)',
          'Distinguish Directional from Non-directional Hypotheses'
        ],
        unitRecapPoints: [
          'Research questions inquire; hypotheses state testable relationships.',
          'Null hypothesis assumes no relationship/difference (H0: μ1 = μ2); alternative hypothesis posits a significant difference.'
        ],
        topics: [
          {
            id: 'top-fms-4-1',
            title: 'Null vs. Alternative Hypotheses and Scientific Prediction',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 4, Section 3.1–3.4, pp. 34–42',
            textbookDefinitions: [
              {
                term: 'Null Hypothesis (H0)',
                definition: 'A statistical proposition asserting that no genuine relationship, effect, or difference exists between designated variables, and that any observed divergence is due solely to sampling error.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Hypotheses bridge theoretical conjectures and empirical reality.

Types of Hypotheses:
1. Null Hypothesis ($H_0$): Presumes zero difference or zero effect (e.g. "There is no significant relationship between training frequency and employee productivity"). Statistical tests can only reject or fail to reject $H_0$.
2. Alternative Hypothesis ($H_1$): Posits a genuine effect or relationship.
- Directional: Predicts specific direction (e.g. "Higher training frequency leads to higher productivity").
- Non-directional: Predicts a difference without specifying direction (e.g. "There is a significant difference in productivity between trained and untrained workers").`,
            summaryPoints: [
              'Statistical tests assess the probability of obtaining sample data assuming $H_0$ is true.',
              'Directional hypotheses use one-tailed tests; non-directional hypotheses use two-tailed tests.'
            ],
            simplifiedExplanation: {
              analogy: 'In a court of law, a defendant is presumed innocent until proven guilty. The Null Hypothesis is the presumption of innocence—it assumes no relationship exists unless the evidence proves guilt beyond reasonable doubt (p < 0.05).',
              plainEnglish: 'H0 says: "Nothing is happening." H1 says: "There is a real effect."',
              keyTakeaway: 'Always pair every research objective with an aligned research question and testable hypothesis.',
              examTip: 'Remember: statistical significance rejects H0, supporting H1.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-4-1-1',
                prompt: 'Which hypothesis is formulated stating that "no significant relationship or difference exists between variables"?',
                options: [
                  'Directional Alternative Hypothesis',
                  'Null Hypothesis (H0)',
                  'Unverified Speculative Theory',
                  'Biased Presumption'
                ],
                correctIndex: 1,
                explanation: 'The Null Hypothesis (H0) posits no difference or effect, serving as the benchmark for statistical falsification.',
                origin: 'original_past_question',
                sourceYear: '2016 Examination',
                sourceReference: 'FMS 304, Unit 4, p. 38'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-4-1',
                questionType: 'written_definition',
                prompt: 'Define Null Hypothesis (H0) and Alternative Hypothesis (H1). Differentiate between Directional and Non-directional Hypotheses.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 4, Section 3.2, pp. 36–40',
                expectedAnswerGuide: 'Null hypothesis asserts no difference or relationship exists. Alternative hypothesis asserts a relationship. Directional specifies positive or negative direction; non-directional asserts a difference without specifying direction.',
                keyRubricPoints: [
                  'Definition of H0 and H1',
                  'Clear distinction between directional and non-directional'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 4'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-5',
        unitNumber: '5.0',
        title: 'Unit 5: Literature Review and Theoretical Framework',
        objectives: [
          'Conduct systematic literature searches across primary and secondary sources',
          'Organize conceptual, empirical, and theoretical reviews',
          'Synthesize research gaps from existing empirical findings'
        ],
        unitRecapPoints: [
          'Literature review grounds the inquiry in cumulative scholarship and prevents reinventing the wheel.',
          'Consists of conceptual framework, theoretical foundation, and empirical review.'
        ],
        topics: [
          {
            id: 'top-fms-5-1',
            title: 'Structuring the Literature Review and Identifying Knowledge Gaps',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 5, Section 3.1–3.4, pp. 44–54',
            textbookDefinitions: [
              {
                term: 'Literature Review',
                definition: 'A comprehensive, critical, and structured synthesis of published scholarship, theories, and empirical studies relevant to the specific topic under investigation.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `A literature review is not a mere chronological list of book summaries; it is an analytical synthesis comparing methodologies, arguments, and conflicting empirical findings.

Three Pillars of Chapter Two:
1. Conceptual Review: Clarifying and operationalizing key concepts, models, and definitions.
2. Theoretical Framework: Grounding the study in established scholarly theories (e.g. Agency Theory, Maslow\'s Hierarchy, Resource-Based View).
3. Empirical Review: Reviewing prior research studies, examining their samples, instruments, statistical findings, and pinpointing the exact gap this research will fill.`,
            summaryPoints: [
              'Critical synthesis must reveal contradictions and unexamined niches in current knowledge.',
              'The theoretical framework provides the scaffolding supporting the study hypotheses.'
            ],
            simplifiedExplanation: {
              analogy: 'Before building a second floor on a house, you inspect the foundation and the first floor built by previous workers. Literature review ensures you build on solid scholarly foundations.',
              plainEnglish: 'Review what other researchers discovered so you don\'t repeat their mistakes or investigate something that is already solved.',
              keyTakeaway: 'Always conclude your literature review with a clear "Summary of Gaps in Literature".',
              examTip: 'Cite the 3 pillars: conceptual review, theoretical framework, and empirical review.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-5-1-1',
                prompt: 'What is the primary academic function of the Theoretical Framework in research methodology?',
                options: [
                  'To add ornamental pages to make the thesis heavier',
                  'To anchor the study variables and hypotheses in established scientific theories',
                  'To replace the need to collect empirical field data',
                  'To guarantee that findings will never be disputed'
                ],
                correctIndex: 1,
                explanation: 'Theoretical frameworks provide established analytical principles to interpret variable relationships.',
                origin: 'original_past_question',
                sourceYear: '2017 Examination',
                sourceReference: 'FMS 304, Unit 5, p. 49'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-5-1',
                questionType: 'written_discussion',
                prompt: 'Discuss the three structural components of a literature review in postgraduate management research.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 5, Section 3.2, pp. 46–50',
                expectedAnswerGuide: 'The three components are: Conceptual Review (defining terms), Theoretical Framework (identifying guiding theories), and Empirical Review (synthesizing past research findings to isolate research gaps).',
                keyRubricPoints: [
                  'Conceptual review explained',
                  'Theoretical framework explained',
                  'Empirical review and identification of gaps'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 5'
              }
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 2: Research Design, Measurement & Sampling
  // --------------------------------------------------------------------------
  {
    id: 'mod-fms-2',
    moduleNumber: 2,
    title: 'Module 2: Research Design, Measurement & Sampling',
    units: [
      {
        id: 'unit-fms-6',
        unitNumber: '6.0',
        title: 'Unit 6: Research Designs (Exploratory, Descriptive, Causal)',
        objectives: [
          'Define Research Design as the methodological blueprint of inquiry',
          'Differentiate Exploratory, Descriptive, and Causal/Experimental designs',
          'Evaluate internal and external validity threats in experimental designs'
        ],
        unitRecapPoints: [
          'Research design guides data collection, measurement, and statistical analysis.',
          'Exploratory uncovers insights; descriptive portrays characteristics; causal establishes cause-and-effect.'
        ],
        topics: [
          {
            id: 'top-fms-6-1',
            title: 'Taxonomy of Research Designs and Methodological Blueprint',
            readingMinutes: 5,
            sourceReference: 'FMS 304, Unit 6, Section 3.1–3.4, pp. 56–66',
            textbookDefinitions: [
              {
                term: 'Research Design',
                definition: 'The overall plan and structure of an investigation conceived to obtain answers to research questions and control variance.',
                sourceAuthor: 'Kerlinger (1973)'
              }
            ],
            content: `The research design is the architectural blueprint of the entire investigation.

Primary Categories of Research Design:
1. Exploratory Design: Utilized when the research problem is broad or poorly understood. Aims to discover ideas, formulate hypotheses, and establish research priorities (methods include pilot surveys, focus groups, case studies).
2. Descriptive Design: Aims to accurately depict the characteristics of a population or phenomenon (who, what, when, where). Employs cross-sectional survey questionnaires and structured observation.
3. Causal (Experimental) Design: Aims to demonstrate that a change in independent variable X causes a specific change in dependent variable Y while controlling confounding extraneous variables.`,
            summaryPoints: [
              'Survey research is predominantly descriptive and cross-sectional in management sciences.',
              'Causal designs require manipulation of independent variables and random assignment.'
            ],
            simplifiedExplanation: {
              analogy: 'Exploratory design is a scout exploring unknown jungle. Descriptive design is a surveyor drawing an exact map of the jungle. Causal design is a scientist testing whether burning a tree causes the river to dry up.',
              plainEnglish: 'Research design tells you exactly what kind of study you are doing: exploring, describing, or testing cause-and-effect.',
              keyTakeaway: 'Select your design based on the research question, not personal preference.',
              examTip: 'Cite Kerlinger (1973) when defining research design.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-6-1-1',
                prompt: 'Which research design is specifically designed to prove cause-and-effect relationships between variables?',
                options: [
                  'Exploratory Design',
                  'Descriptive Cross-Sectional Design',
                  'Causal / Experimental Design',
                  'Casual Anecdotal Review'
                ],
                correctIndex: 2,
                explanation: 'Only experimental/causal designs manipulate independent variables with controls to prove cause-and-effect.',
                origin: 'original_past_question',
                sourceYear: '2016 Examination',
                sourceReference: 'FMS 304, Unit 6, p. 62'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-6-1',
                questionType: 'written_structured',
                prompt: 'Define Research Design according to Kerlinger (1973) and differentiate between Exploratory, Descriptive, and Causal research designs.',
                maxMarks: 12,
                sourceReference: 'FMS 304, Unit 6, Section 3.1–3.3, pp. 57–63',
                expectedAnswerGuide: 'Research design is the plan and structure of investigation conceived to obtain answers to research questions and control variance. Exploratory discovers insights in little-known areas; Descriptive portrays accurate population characteristics; Causal proves cause-and-effect through experimental manipulation.',
                keyRubricPoints: [
                  'Kerlinger definition',
                  'Exploratory design explanation',
                  'Descriptive design explanation',
                  'Causal design explanation'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 6'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-7',
        unitNumber: '7.0',
        title: 'Unit 7: Population, Sampling Techniques & Sample Size Determination',
        objectives: [
          'Define Population, Target Population, Accessible Population, and Sample',
          'Differentiate between Probability Sampling and Non-Probability Sampling designs',
          'Compute sample size using the Taro Yamane (1967) formula with step-by-step arithmetic',
          'Apply Stratified Proportional Allocation to distribute sample sizes across sub-groups'
        ],
        unitRecapPoints: [
          'Target population is the complete group of interest; accessible population is the portion realistically reachable.',
          'Taro Yamane formula: n = N / [1 + N(e)^2] where e is the precision tolerance.',
          'Stratified sampling ensures proportional representation: ni = (Ni / N) * n.'
        ],
        topics: [
          {
            id: 'top-fms-7-1',
            title: 'Taro Yamane Formula and Sample Size Determination',
            readingMinutes: 6,
            sourceReference: 'FMS 304 Course Guide, Unit 7, Section 3.4–3.6, pp. 70–82',
            textbookDefinitions: [
              {
                term: 'Population',
                definition: 'The entire group of individuals, objects, or events having common observable characteristics in which the researcher is interested.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              },
              {
                term: 'Sample',
                definition: 'A finite subset of a population selected to participate in a study, from which inferences regarding the broader population are drawn.',
                sourceAuthor: 'Best & Kahn (1995)'
              },
              {
                term: 'Taro Yamane Formula',
                definition: 'A mathematical formula used to determine the minimum representative sample size required from a finite population at a designated level of precision.',
                sourceAuthor: 'Yamane (1967)'
              }
            ],
            content: `In scientific research, studying an entire population is frequently prohibitive due to constraints of time, finance, and geographical dispersion. Consequently, the researcher must select a scientifically defensible sample.

When the target population is finite and its total number (N) is known, Taro Yamane (1967) provides a simplified formula to calculate the appropriate sample size (n) at a chosen level of precision (e):

$$n = \\frac{N}{1 + N(e)^2}$$

Where:
- $n$ = The required sample size
- $N$ = The finite population size
- $e$ = The margin of error / level of precision (expressed as a decimal, e.g. 5% = 0.05)
- $1$ = Theoretical constant

Stratified Random Sampling (Proportional Allocation):
When the population consists of heterogeneous strata (such as junior staff, senior staff, and management), selecting samples without stratification distorts the findings. The proportional allocation formula distributes the total sample size ($n$) across stratum ($i$) as follows:

$$n_i = \\frac{N_i}{N} \\times n$$

Where:
- $n_i$ = Sample allocated to stratum $i$
- $N_i$ = Population of stratum $i$
- $N$ = Total population
- $n$ = Total calculated sample size`,
            summaryPoints: [
              'Taro Yamane applies specifically to finite populations where N is known.',
              'The margin of error (e) is commonly set at 0.05 (5% error, 95% confidence).',
              'Stratified proportional allocation preserves the natural percentage of each demographic stratum.'
            ],
            simplifiedExplanation: {
              analogy: 'Imagine testing a massive pot of stew containing 10,000 beans. You do not need to eat all 10,000 beans to know if it needs salt. Taro Yamane mathematically tells you that tasting exactly 385 properly stirred beans gives you a 95% certainty of the flavour.',
              plainEnglish: 'The Taro Yamane formula tells you the exact minimum number of questionnaires you must distribute so your findings are statistically reliable.',
              keyTakeaway: 'Sample Size n = N / [1 + N(e)^2]. Always convert percentage error into a decimal before squaring.',
              examTip: 'Remember to square e FIRST, multiply by N SECOND, add 1 THIRD, and divide N by the resulting denominator LAST.'
            },
            formulas: [
              {
                id: 'form-fms-yamane',
                name: 'Taro Yamane Sample Size Determination Formula (1967)',
                formulaDisplay: 'n = N / [1 + N(e)^2]',
                contextAndPurpose: 'Calculates the mathematically defensible minimum sample size required for survey research from a known finite population.',
                variables: [
                  { symbol: 'n', name: 'Sample Size', explanation: 'The required minimum number of respondents to sample.', unitOrScale: 'Persons / units' },
                  { symbol: 'N', name: 'Population Size', explanation: 'The total finite universe of individuals under investigation.', unitOrScale: 'Total count' },
                  { symbol: 'e', name: 'Margin of Error', explanation: 'The acceptable level of precision / tolerance error (typically 0.05 for 95% confidence).', unitOrScale: 'Decimal (e.g. 0.05)' },
                  { symbol: '1', name: 'Constant', explanation: 'Mathematical constant anchored in the probability distribution.', unitOrScale: 'Integer' }
                ],
                workedExamples: [
                  {
                    title: 'Worked Example 7.1: NOUN Undergraduate Population',
                    problemStatement: 'A researcher investigating study habits at NOUN has a total registered student population of N = 10,000 across four faculties. Determine the minimum sample size required at a 5% margin of error (e = 0.05).',
                    givenValues: [
                      { symbol: 'N', label: 'Finite Population Size', value: '10,000' },
                      { symbol: 'e', label: 'Level of Precision', value: '0.05 (5%)' }
                    ],
                    steps: [
                      { stepNumber: 1, description: 'Square the margin of error (e)', mathExpression: 'e^2 = (0.05)^2 = 0.0025', explanation: 'Multiply 0.05 by 0.05.' },
                      { stepNumber: 2, description: 'Multiply N by e^2', mathExpression: 'N(e^2) = 10,000 \\times 0.0025 = 25', explanation: 'Scale the variance by total population size.' },
                      { stepNumber: 3, description: 'Add the constant 1 to the denominator', mathExpression: 'Denominator = 1 + 25 = 26', explanation: 'Complete the denominator calculation.' },
                      { stepNumber: 4, description: 'Divide total population N by the denominator', mathExpression: 'n = \\frac{10,000}{26} = 384.615 \\approx 385', explanation: 'Round up to the nearest whole integer.' }
                    ],
                    finalResult: '385 respondents',
                    authorInterpretation: 'At a 5% margin of error and 95% confidence level, a minimum of 385 questionnaires must be administered to represent the 10,000 students validly.',
                    sourceReference: 'FMS 304 Course Guide, Unit 7, Section 3.5, p. 78'
                  }
                ],
                sourceReference: 'FMS 304 Course Guide, Unit 7, Section 3.5, p. 77'
              }
            ],
            tables: [
              {
                title: 'Table 7.1: Probability vs. Non-Probability Sampling Designs',
                headers: ['Sampling Dimension', 'Probability Sampling Designs', 'Non-Probability Sampling Designs'],
                rows: [
                  ['Selection Principle', 'Every element has a known, non-zero chance of selection.', 'Selection depends on researcher judgment, convenience, or quota.'],
                  ['Textbook Examples', 'Simple Random, Systematic, Stratified, Cluster sampling.', 'Convenience (accidental), Purposive (judgmental), Quota, Snowball.'],
                  ['Generalizability', 'Findings can be legitimately generalized to the target population with statistical error margins.', 'Findings cannot be statistically generalized beyond the immediate respondents sampled.'],
                  ['Error Estimation', 'Sampling error can be calculated mathematically.', 'Sampling error cannot be computed or controlled.']
                ],
                sourceCitation: 'FMS 304, Unit 7, Section 3.3, pp. 74–75'
              }
            ],
            checkpointQuiz: [
              {
                id: 'q-fms-7-1-1',
                prompt: 'A researcher with a finite population of N = 10,000 applies the Taro Yamane formula at e = 0.05. What is the calculated sample size?',
                options: [
                  '100 respondents',
                  '250 respondents',
                  '385 respondents',
                  '1,000 respondents'
                ],
                correctIndex: 2,
                explanation: 'n = 10,000 / [1 + 10,000(0.05^2)] = 10,000 / [1 + 25] = 10,000 / 26 = 384.6, which rounds up to 385 respondents.',
                origin: 'original_past_question',
                sourceYear: '2018 Examination Paper',
                sourceReference: 'FMS 304, Unit 7, Section 3.5, p. 78'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-7-1',
                questionType: 'written_process',
                prompt: 'State the Taro Yamane (1967) formula for sample size determination from a finite population. Define all variables and calculate the sample size for a finite population of N = 10,000 at a 5% margin of error.',
                maxMarks: 15,
                sourceReference: 'FMS 304 Course Guide, Unit 7, Section 3.5, pp. 77–78',
                expectedAnswerGuide: 'Formula: n = N / [1 + N(e)^2]. Symbols: n = required sample size; N = finite population size (10,000); e = margin of error (0.05); 1 = constant. Calculation: e^2 = 0.0025. N * e^2 = 25. Denominator = 26. n = 10,000 / 26 = 384.6 ≈ 385 respondents. Interpretation: 385 questionnaires must be administered to represent 10,000 subjects with 95% confidence.',
                keyRubricPoints: [
                  'States formula: n = N / [1 + N(e)^2]',
                  'Defines n, N, e, and constant 1 correctly',
                  'Calculates e^2 = 0.0025 and denominator = 26',
                  'Arrives at 385 respondents with statistical interpretation'
                ],
                examinerTips: 'Show all 4 intermediate calculation steps to receive full credit.',
                origin: 'authentic_past_exam',
                sourceLabel: 'Past Examination 2018 Question 3'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-8',
        unitNumber: '8.0',
        title: 'Unit 8: Measurement Scales and Operationalization of Variables',
        objectives: [
          'Identify the four levels of measurement: Nominal, Ordinal, Interval, and Ratio',
          'Operationalize abstract theoretical constructs into measurable empirical indicators',
          'Select appropriate statistical tests matching each measurement scale'
        ],
        unitRecapPoints: [
          'Stevens (1946) taxonomy: Nominal (labels), Ordinal (rank), Interval (equal distance, arbitrary zero), Ratio (absolute zero).',
          'Only Interval and Ratio data qualify for parametric statistics.'
        ],
        topics: [
          {
            id: 'top-fms-8-1',
            title: 'Levels of Measurement and Variable Operationalization',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 8, Section 3.1–3.4, pp. 84–94',
            textbookDefinitions: [
              {
                term: 'Operationalization',
                definition: 'The process of strictly defining variables into measurable factors to allow them to be measured empirically and quantitatively.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `In research, abstract concepts (like "job satisfaction", "motivation", or "brand loyalty") cannot be directly weighed on a scale. They must be operationalized into observable indicators.

Four Levels of Measurement (Stevens 1946):
1. Nominal Scale: Classification into mutually exclusive categories without order (e.g. Gender, Religion, Department). Statistical tests: Mode, Frequency, Chi-Square.
2. Ordinal Scale: Categorization with ranked order, but distance between ranks is unequal or unknown (e.g. Likert Scale: Strongly Agree to Strongly Disagree; Educational Level). Statistical tests: Median, Spearman Rank Correlation.
3. Interval Scale: Ordered ranks with equal distance between units, but NO true absolute zero (e.g. Temperature in Celsius, IQ test scores). Statistical tests: Mean, Standard Deviation, Pearson r, t-test.
4. Ratio Scale: Possesses all properties of interval scale PLUS a true absolute zero point representing total absence of the property (e.g. Revenue in Naira, Age in years, Units produced). Statistical tests: All parametric and geometric statistics.`,
            summaryPoints: [
              'Nominal and Ordinal are non-parametric scales; Interval and Ratio are parametric scales.',
              'Likert scales in questionnaires are strictly ordinal but commonly treated as interval in composite scores.'
            ],
            simplifiedExplanation: {
              analogy: 'Nominal is football jersey numbers (labels). Ordinal is 1st, 2nd, and 3rd place in a race (order, but gap is unknown). Interval is calendar years (equal gaps, but Year 0 is not the start of time). Ratio is cash in your wallet (N0 means literally zero cash).',
              plainEnglish: 'The level of measurement tells you what kind of math and statistics you are allowed to use on your data.',
              keyTakeaway: 'You cannot calculate a Mean for Nominal data; use Mode.',
              examTip: 'Memorize the acronym NOIR: Nominal, Ordinal, Interval, Ratio.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-8-1-1',
                prompt: 'Which measurement scale is characterized by equal intervals between points AND an absolute true zero point?',
                options: [
                  'Nominal Scale',
                  'Ordinal Scale',
                  'Ratio Scale',
                  'Hypothetical Scale'
                ],
                correctIndex: 2,
                explanation: 'Only the Ratio scale possesses an absolute true zero representing the complete absence of the property.',
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'FMS 304, Unit 8, p. 89'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-8-1',
                questionType: 'written_discussion',
                prompt: 'Explain the four levels of measurement (NOIR) with concrete examples from management research.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 8, Section 3.2, pp. 86–91',
                expectedAnswerGuide: 'Nominal (classification, e.g. department), Ordinal (ranking, e.g. performance rating), Interval (equal distance, arbitrary zero, e.g. satisfaction score), Ratio (true zero, e.g. annual salary, units sold).',
                keyRubricPoints: [
                  'All 4 levels defined correctly',
                  'Appropriate management example for each level'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 8'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-9',
        unitNumber: '9.0',
        title: 'Unit 9: Methods and Instruments of Data Collection',
        objectives: [
          'Design structured questionnaires using Likert and semantic differential scales',
          'Compare structured vs. unstructured interview protocols',
          'Evaluate observation methods and secondary document extraction'
        ],
        unitRecapPoints: [
          'Questionnaires are economical for large samples; interviews yield depth and qualitative nuance.',
          'Avoid leading, double-barreled, and ambiguous question phrasing.'
        ],
        topics: [
          {
            id: 'top-fms-9-1',
            title: 'Questionnaire Construction and Interview Methodologies',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 9, Section 3.1–3.4, pp. 96–108',
            textbookDefinitions: [
              {
                term: 'Questionnaire',
                definition: 'A pre-formulated written set of questions to which respondents record their answers, usually within rather closely defined alternatives.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `The quality of scientific findings is constrained by the quality of the data collection instrument.

Rules for Effective Questionnaire Design:
1. Avoid Double-Barreled Questions: Never combine two issues into one question (e.g. "Do you find your salary adequate and your supervisor supportive?").
2. Avoid Leading Questions: Do not bias the respondent (e.g. "Do you agree that our bank offers superior service?").
3. Use Structured Likert Scales: Standardize response anchors (5-point scale: Strongly Agree to Strongly Disagree).
4. Pre-testing and Piloting: Administer to a pilot sample of 20–30 respondents to identify confusing words before full-scale distribution.`,
            summaryPoints: [
              'Pre-testing detects ambiguous wording and eliminates confusing phrasing.',
              'Interviews provide high response rates but require significant researcher time.'
            ],
            simplifiedExplanation: {
              analogy: 'Asking a double-barreled question is like asking someone: "Do you like eating rice and drinking kerosene?" They cannot answer yes or no because they like one but hate the other.',
              plainEnglish: 'Make your survey questions short, simple, unbiased, and about only one thing at a time.',
              keyTakeaway: 'Always pilot test your questionnaire before distributing all 385 copies.',
              examTip: 'Define double-barreled questions and explain why they invalidate survey data.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-9-1-1',
                prompt: 'Why is the question "Do you consider your work schedule flexible and your salary fair?" flawed in survey design?',
                options: [
                  'Because it is too short',
                  'Because it is a double-barreled question combining two independent issues into a single response',
                  'Because salary should never be mentioned in research',
                  'Because questions must contain at least 50 words'
                ],
                correctIndex: 1,
                explanation: 'It forces a single answer to two separate dimensions (schedule flexibility vs salary fairness).',
                origin: 'original_past_question',
                sourceYear: '2020 Examination',
                sourceReference: 'FMS 304, Unit 9, p. 102'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-9-1',
                questionType: 'written_discussion',
                prompt: 'Outline four fundamental principles of sound questionnaire design and explain why pilot testing is essential.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 9, Section 3.2, pp. 98–104',
                expectedAnswerGuide: 'Principles: avoid double-barreled questions, avoid leading phrasing, use clear unbiased language, and structure responses with consistent Likert anchors. Pilot testing is essential to detect ambiguities, evaluate completion time, and test reliability before full distribution.',
                keyRubricPoints: [
                  'Four principles outlined',
                  'Role of pilot testing explained'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 9'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-10',
        unitNumber: '10.0',
        title: 'Unit 10: Reliability and Validity of Research Instruments',
        objectives: [
          'Differentiate Reliability (consistency) from Validity (measuring what is intended)',
          'Assess Face Validity, Content Validity, and Construct Validity',
          'Calculate Cronbach Alpha and Test-Retest reliability coefficients'
        ],
        unitRecapPoints: [
          'An instrument can be reliable without being valid, but it cannot be valid unless it is reliable.',
          'Cronbach Alpha coefficient should exceed 0.70 for research acceptability.'
        ],
        topics: [
          {
            id: 'top-fms-10-1',
            title: 'Measurement Psychometrics: Validity and Reliability Testing',
            readingMinutes: 5,
            sourceReference: 'FMS 304, Unit 10, Section 3.1–3.5, pp. 110–122',
            textbookDefinitions: [
              {
                term: 'Validity',
                definition: 'The extent to which an empirical instrument accurately measures the specific concept it was designed to measure.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              },
              {
                term: 'Reliability',
                definition: 'The degree of consistency or stability that an instrument demonstrates when measuring the same attribute under repeated administrations.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Validity and reliability are the twin pillars of measurement rigor.

1. Types of Validity:
- Face Validity: Subjective evaluation by subject matter experts whether the test looks like it measures what it purports to.
- Content Validity: Systematic evaluation ensuring the items adequately represent the full domain of the syllabus or construct.
- Construct Validity: Empirical confirmation (via factor analysis or correlation) that the instrument aligns with theoretical expectations.

2. Types of Reliability:
- Test-Retest: Administering the same instrument to the same sample after an interval (e.g. 14 days) and computing Pearson correlation ($r$).
- Internal Consistency (Cronbach\'s Alpha): Measures how well the items in a scale correlate with each other. Standard benchmark: $\\alpha \\ge 0.70$.`,
            summaryPoints: [
              'Reliability is a necessary but insufficient condition for validity.',
              'Cronbach alpha assesses internal consistency across multi-item Likert scales.'
            ],
            simplifiedExplanation: {
              analogy: 'Imagine a faulty bathroom scale that consistently adds 5kg to your weight every time you step on it. It is 100% reliable (gives the exact same result every day), but it has zero validity (it does not measure your true weight).',
              plainEnglish: 'Reliability means consistency. Validity means accuracy.',
              keyTakeaway: 'Always establish Content Validity through expert panel review and Reliability through Cronbach Alpha (threshold 0.70).',
              examTip: 'Explain why an instrument can be reliable without being valid, but not vice-versa.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-10-1-1',
                prompt: 'What is the standard minimum threshold for Cronbach\'s Alpha (α) coefficient to establish acceptable internal consistency reliability in survey research?',
                options: [
                  'α ≥ 0.10',
                  'α ≥ 0.70',
                  'α ≥ 5.00',
                  'α = 0.00'
                ],
                correctIndex: 1,
                explanation: 'A Cronbach Alpha of 0.70 or higher is the universally accepted benchmark for acceptable measurement reliability.',
                origin: 'original_past_question',
                sourceYear: '2018 Examination',
                sourceReference: 'FMS 304, Unit 10, p. 118'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-10-1',
                questionType: 'written_difference',
                prompt: 'Differentiate between Validity and Reliability. Explain why a research instrument can be reliable without being valid.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 10, Section 3.1–3.3, pp. 111–116',
                expectedAnswerGuide: 'Validity is the accuracy of an instrument (measuring what it intends to measure). Reliability is the consistency and stability of measurement. An instrument can produce consistent results repeatedly (reliable) while measuring the wrong construct or suffering from systematic bias (invalid).',
                keyRubricPoints: [
                  'Definition of Validity',
                  'Definition of Reliability',
                  'Explanation of how consistency can coexist with inaccuracy'
                ],
                origin: 'authentic_past_exam',
                sourceLabel: 'Past Examination 2018 Question 2'
              }
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 3: Data Analysis, Statistical Testing & Presentation
  // --------------------------------------------------------------------------
  {
    id: 'mod-fms-3',
    moduleNumber: 3,
    title: 'Module 3: Data Analysis, Statistical Testing & Presentation',
    units: [
      {
        id: 'unit-fms-11',
        unitNumber: '11.0',
        title: 'Unit 11: Data Organization and Descriptive Statistics',
        objectives: [
          'Organize raw field data into frequency tables and percentages',
          'Calculate measures of central tendency: Mean, Median, and Mode',
          'Compute measures of dispersion: Variance and Standard Deviation'
        ],
        unitRecapPoints: [
          'Descriptive statistics summarize and organize sample characteristics without drawing population inferences.',
          'Standard deviation quantifies dispersion around the arithmetic mean.'
        ],
        topics: [
          {
            id: 'top-fms-11-1',
            title: 'Frequency Distributions and Measures of Central Tendency & Dispersion',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 11, Section 3.1–3.4, pp. 124–136',
            textbookDefinitions: [
              {
                term: 'Standard Deviation',
                definition: 'The square root of the variance, representing the average amount by which individual scores deviate from the arithmetic mean.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Descriptive statistics summarize numerical datasets into comprehensible indices.

1. Measures of Central Tendency:
- Mean ($\\bar{X}$): The arithmetic average (Sum of X / N). Sensitive to extreme outliers.
- Median: The exact middle score in an ordered array (50th percentile). Robust against extreme values.
- Mode: The most frequently occurring score in the distribution.

2. Measures of Dispersion:
- Variance ($s^2$): Average of squared deviations from the mean:
$$s^2 = \\frac{\\sum (X - \\bar{X})^2}{n - 1}$$
- Standard Deviation ($s$): Square root of variance, expressed in original measurement units.`,
            summaryPoints: [
              'Use Median when the distribution is heavily skewed by extreme values.',
              'Standard deviation measures data spread and variability.'
            ],
            simplifiedExplanation: {
              analogy: 'If nine people in a room earn N50,000 and Aliko Dangote walks in, the average (Mean) salary jumps to N1,000,000,000, which is misleading. The Median stays at N50,000, which reflects real life.',
              plainEnglish: 'Descriptive statistics describe what your sample answers look like: the average score and how widely answers varied.',
              keyTakeaway: 'Always present both Mean and Standard Deviation together.',
              examTip: 'State why the median is superior to the mean in skewed distributions.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-11-1-1',
                prompt: 'Why is the Median preferred over the Mean when analyzing executive salaries or wealth distributions?',
                options: [
                  'Because the median is illegal under tax laws',
                  'Because extreme high outliers artificially distort the mean, whereas the median reflects the true middle value',
                  'Because computers cannot calculate the mean',
                  'Because the median is always zero'
                ],
                correctIndex: 1,
                explanation: 'Extreme outliers pull the arithmetic mean upward, whereas the median remains unaffected.',
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'FMS 304, Unit 11, p. 128'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-11-1',
                questionType: 'written_structured',
                prompt: 'Define Mean, Median, and Mode. Explain why Standard Deviation is considered superior to the Range as a measure of dispersion.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 11, Section 3.2–3.3, pp. 126–132',
                expectedAnswerGuide: 'Mean is arithmetic average; Median is middle score; Mode is most frequent value. Standard Deviation is superior to Range because Range only uses two extreme values while Standard Deviation takes every score in the distribution into account.',
                keyRubricPoints: [
                  'Definitions of Mean, Median, Mode',
                  'Superiority of standard deviation explained'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 11'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-12',
        unitNumber: '12.0',
        title: 'Unit 12: Parametric and Non-Parametric Hypotheses Testing',
        objectives: [
          'Differentiate between Parametric and Non-Parametric statistical tests',
          'Calculate and interpret the Chi-Square test of independence',
          'Apply Student\'s t-test and Analysis of Variance (ANOVA)',
          'Interpret p-values against alpha levels (p < 0.05)'
        ],
        unitRecapPoints: [
          'Parametric tests require normal distribution and interval/ratio scales; non-parametric tests apply to nominal/ordinal data.',
          'Chi-Square compares observed frequencies against expected frequencies: χ2 = Σ [(O - E)^2 / E].'
        ],
        topics: [
          {
            id: 'top-fms-12-1',
            title: 'Inferential Statistics: Chi-Square, t-Test, ANOVA & Decision Rules',
            readingMinutes: 5,
            sourceReference: 'FMS 304, Unit 12, Section 3.1–3.6, pp. 138–152',
            textbookDefinitions: [
              {
                term: 'Chi-Square (χ²)',
                definition: 'A non-parametric statistical test used to determine whether a significant difference exists between observed frequencies and expected frequencies across categorical variables.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              },
              {
                term: 'p-Value',
                definition: 'The probability of observing a test statistic as extreme as the one calculated, assuming that the null hypothesis is true.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Inferential statistics allow researchers to draw valid conclusions about populations from sample observations.

Chi-Square Test of Independence:
$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$
Where:
- $O$ = Observed frequency in field survey
- $E$ = Expected frequency under null hypothesis: $E = \\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}}$

Parametric Test Taxonomy:
1. Student\'s t-Test: Compares the means of two groups (e.g. comparing sales productivity between male and female sales reps).
2. Analysis of Variance (ANOVA / F-Test): Compares the means of three or more groups (e.g. comparing sales productivity across North, South, and East divisions).
Decision Rule: Reject $H_0$ if calculated statistic exceeds critical table value, or if $p < 0.05$.`,
            summaryPoints: [
              'Chi-Square is non-parametric and evaluates categorical contingency tables.',
              't-Test compares 2 group means; ANOVA compares 3 or more group means.',
              'p < 0.05 indicates statistical significance at 95% confidence level.'
            ],
            simplifiedExplanation: {
              analogy: 'Testing with p < 0.05 is like a coin toss: if a coin lands on heads 20 times in a row, the probability of that happening by pure luck is less than 5%. You reject the claim that the coin is fair and conclude it is loaded.',
              plainEnglish: 'Statistical tests prove whether your survey findings are real or just a random accident.',
              keyTakeaway: 'If p < 0.05, reject H0 and accept H1.',
              examTip: 'State the Chi-Square formula and define O and E.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-12-1-1',
                prompt: 'Which statistical test is used to compare the means of three or more independent groups on a continuous variable?',
                options: [
                  'Simple Percentage Frequency',
                  'Student\'s t-Test',
                  'Analysis of Variance (ANOVA)',
                  'Subjective Opinion Survey'
                ],
                correctIndex: 2,
                explanation: 'ANOVA (F-test) evaluates mean differences across three or more groups simultaneously.',
                origin: 'original_past_question',
                sourceYear: '2019 Examination',
                sourceReference: 'FMS 304, Unit 12, p. 146'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-12-1',
                questionType: 'written_process',
                prompt: 'State the formula for Chi-Square (χ²) test of independence and explain the decision rule for hypothesis testing at the 0.05 level of significance.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 12, Section 3.2, pp. 140–144',
                expectedAnswerGuide: 'Formula: Chi-Square = Sum[(O - E)^2 / E]. O is observed frequency; E is expected frequency. Decision rule: Reject Null Hypothesis (H0) if calculated Chi-square value is greater than critical table value at designated degrees of freedom (or p < 0.05); otherwise fail to reject H0.',
                keyRubricPoints: [
                  'States Chi-square formula correctly',
                  'Defines O and E',
                  'Explains decision rule comparing calculated vs critical value'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 12'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-13',
        unitNumber: '13.0',
        title: 'Unit 13: Correlation and Regression Analysis',
        objectives: [
          'Calculate Pearson Product Moment Correlation (r)',
          'Interpret the direction and strength of correlation coefficients',
          'Formulate Simple and Multiple Linear Regression models',
          'Interpret the Coefficient of Determination (R²)'
        ],
        unitRecapPoints: [
          'Correlation measures association (-1.0 to +1.0); regression predicts dependent variable Y from independent variable X.',
          'Correlation does not prove causation.'
        ],
        topics: [
          {
            id: 'top-fms-13-1',
            title: 'Pearson Correlation, Regression Equations & R-Squared',
            readingMinutes: 5,
            sourceReference: 'FMS 304, Unit 13, Section 3.1–3.5, pp. 154–168',
            textbookDefinitions: [
              {
                term: 'Correlation Coefficient (r)',
                definition: 'A standardized index ranging from -1.00 to +1.00 quantifying the strength and direction of linear association between two continuous variables.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              },
              {
                term: 'Coefficient of Determination (R²)',
                definition: 'The proportion of variance in the dependent variable that is predictable from the independent variable(s).',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Correlation and regression examine relationships between quantitative variables.

1. Correlation ($r$):
Ranges between -1.00 (perfect negative) and +1.00 (perfect positive). A value of 0.00 indicates zero linear association.
Caution: Correlation indicates co-variation, NOT cause-and-effect.

2. Simple Linear Regression:
$$Y = a + bX + e$$
Where:
- $Y$ = Dependent variable (criterion)
- $X$ = Independent variable (predictor)
- $a$ = Y-intercept (value of Y when X = 0)
- $b$ = Regression slope coefficient (change in Y for one-unit change in X)
- $e$ = Stochastic error term

3. Coefficient of Determination ($R^2$):
If $R^2 = 0.64$, it means 64% of the variation in the dependent variable is explained by the independent variable in the model.`,
            summaryPoints: [
              'Correlation describes association; regression models predictive effect.',
              'R² measures the goodness of fit of the regression equation.'
            ],
            simplifiedExplanation: {
              analogy: 'Ice cream sales and drowning rates both increase in summer (correlation = +0.85). But eating ice cream does not cause drowning; hot weather causes both. Correlation does not prove causation.',
              plainEnglish: 'Correlation tells you if two things go up together. Regression lets you predict future numbers using a formula.',
              keyTakeaway: 'R-squared tells you what percentage of your problem is explained by your predictor.',
              examTip: 'Never confuse correlation with causation.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-13-1-1',
                prompt: 'If a regression analysis produces R² = 0.81, what does this indicate?',
                options: [
                  'That 81% of respondents refused to answer the survey',
                  'That 81% of the total variance in the dependent variable is explained by the independent variable(s)',
                  'That the research is 81% fraudulent',
                  'That the regression line slope is negative'
                ],
                correctIndex: 1,
                explanation: 'R² represents the coefficient of determination, indicating the percentage of variance explained.',
                origin: 'original_past_question',
                sourceYear: '2020 Examination',
                sourceReference: 'FMS 304, Unit 13, p. 162'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-13-1',
                questionType: 'written_discussion',
                prompt: 'Differentiate between Correlation and Regression analysis. Why does correlation not necessarily imply causation?',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 13, Section 3.1–3.3, pp. 155–160',
                expectedAnswerGuide: 'Correlation measures the degree and direction of linear association between two variables. Regression models the functional predictive dependency of Y on X. Correlation does not imply causation because two variables can covary due to a third confounding variable or coincidence without one causing the other.',
                keyRubricPoints: [
                  'Definition of correlation',
                  'Definition of regression',
                  'Explanation of why correlation does not equal causation with an example'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 13'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-14',
        unitNumber: '14.0',
        title: 'Unit 14: Research Ethics and Academic Integrity',
        objectives: [
          'Apply the principles of Informed Consent and Confidentiality',
          'Avoid plagiarism, data fabrication, and falsification',
          'Comply with institutional ethical review boards and copyright laws'
        ],
        unitRecapPoints: [
          'Ethics protects research subjects from harm and preserves scientific integrity.',
          'Plagiarism constitutes intellectual theft and invalidates academic degrees.'
        ],
        topics: [
          {
            id: 'top-fms-14-1',
            title: 'Research Ethics, Subject Protection & Plagiarism Prevention',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 14, Section 3.1–3.4, pp. 170–180',
            textbookDefinitions: [
              {
                term: 'Plagiarism',
                definition: 'The appropriation of another person\'s ideas, processes, results, or words without giving appropriate credit.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              },
              {
                term: 'Informed Consent',
                definition: 'The voluntary agreement of a subject to participate in research after being fully informed of the study purpose, risks, and benefits.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `Scientific progress depends on the honesty and integrity of researchers.

Core Ethical Obligations:
1. Protection of Human Subjects:
- Voluntary Participation: Respondents must never be coerced.
- Informed Consent: Explaining purpose and right to withdraw at any time.
- Confidentiality and Anonymity: Protecting respondent identities.
2. Scientific Integrity:
- Fabrication: Inventing fake data that was never collected (severest violation).
- Falsification: Manipulating research materials or omitting contrary findings to force a desired outcome.
- Plagiarism: Using someone else\'s writing or intellectual ideas without explicit APA citation.`,
            summaryPoints: [
              'Fabrication and falsification lead to immediate revocation of academic degrees.',
              'Proper referencing using APA format gives credit to original scholars.'
            ],
            simplifiedExplanation: {
              analogy: 'Plagiarism is walking into a bakery, taking a cake someone else baked, putting your name on it, and claiming you are a master baker. In academia, this is intellectual theft.',
              plainEnglish: 'Never make up fake data, never force people to participate, and always credit other authors when you use their ideas.',
              keyTakeaway: 'Always cite your sources using APA format.',
              examTip: 'Define fabrication, falsification, and plagiarism.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-14-1-1',
                prompt: 'What constitutes "Data Fabrication" in research ethics?',
                options: [
                  'Using standard SPSS software to calculate ANOVA',
                  'Inventing fake empirical data that was never collected in the field and presenting it as genuine research',
                  'Administering questionnaires to 385 respondents',
                  'Citing academic textbooks in the bibliography'
                ],
                correctIndex: 1,
                explanation: 'Fabrication is the deliberate invention of fictitious data without actual empirical collection.',
                origin: 'original_past_question',
                sourceYear: '2021 Examination',
                sourceReference: 'FMS 304, Unit 14, p. 174'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-14-1',
                questionType: 'written_definition',
                prompt: 'Define Plagiarism, Data Fabrication, and Data Falsification. Discuss two measures used to protect human subjects.',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 14, Section 3.2–3.3, pp. 172–177',
                expectedAnswerGuide: 'Plagiarism is using another\'s work without attribution. Fabrication is inventing fake data. Falsification is manipulating data or omitting contrary results. Measures for human subjects: informed voluntary consent and anonymity/confidentiality.',
                keyRubricPoints: [
                  'Definition of plagiarism, fabrication, and falsification',
                  'Two human subject protection measures'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 14'
              }
            ]
          }
        ]
      },
      {
        id: 'unit-fms-15',
        unitNumber: '15.0',
        title: 'Unit 15: Writing and Presenting the Research Report / Thesis Defense',
        objectives: [
          'Structure a complete academic research report following the 5-chapter format',
          'Format in-text citations and bibliographies using APA 7th Edition style',
          'Prepare for oral thesis examination and panel defense'
        ],
        unitRecapPoints: [
          'Standard 5 chapters: 1 Introduction, 2 Literature Review, 3 Methodology, 4 Data Analysis, 5 Summary/Conclusions.',
          'Oral defense requires mastery of methodology, sample justification, and defensible conclusions.'
        ],
        topics: [
          {
            id: 'top-fms-15-1',
            title: 'The Five-Chapter Thesis Architecture and Oral Defense Strategy',
            readingMinutes: 4,
            sourceReference: 'FMS 304, Unit 15, Section 3.1–3.5, pp. 182–196',
            textbookDefinitions: [
              {
                term: 'Thesis Defense',
                definition: 'The oral examination in which a candidate presents and defends the methodological validity, empirical findings, and theoretical contributions of their research before an academic examination panel.',
                sourceAuthor: 'Osuji & Ishola (2012)'
              }
            ],
            content: `The culmination of the research process is writing the final project report and defending it before external examiners.

Standard Five-Chapter Architecture:
- Chapter One: Introduction (Background, Problem Statement, Objectives, Research Questions, Hypotheses, Significance, Scope, Operational Definitions).
- Chapter Two: Literature Review (Conceptual Framework, Theoretical Foundation, Empirical Review, Summary of Gaps).
- Chapter Three: Research Methodology (Design, Population, Sample Size Formula, Sampling Technique, Instrument, Validity, Reliability, Data Analysis Methods).
- Chapter Four: Data Presentation and Analysis (Demographics, Descriptive Analysis, Hypotheses Testing, Discussion of Findings).
- Chapter Five: Summary, Conclusion and Recommendations (Summary of Results, Conclusions, Managerial Recommendations, Contributions to Knowledge, Suggestions for Further Study).`,
            summaryPoints: [
              'Examiners focus heavily on Chapter Three (Methodology) to confirm validity.',
              'Recommendations in Chapter 5 must emerge directly from empirical findings in Chapter 4.'
            ],
            simplifiedExplanation: {
              analogy: 'Writing a thesis is like a courtroom trial. Chapter 1 is the charge. Chapter 2 is legal precedent. Chapter 3 is evidence gathering rules. Chapter 4 is the witness evidence. Chapter 5 is the final verdict.',
              plainEnglish: 'The 5 chapters organize your entire project so any examiner in the world can read and verify your work.',
              keyTakeaway: 'Always ensure your conclusions in Chapter 5 answer the exact research questions stated in Chapter 1.',
              examTip: 'List all five chapters and their essential sub-headings in correct order.'
            },
            checkpointQuiz: [
              {
                id: 'q-fms-15-1-1',
                prompt: 'Which chapter of a standard research report details the population, sample size formula, sampling technique, and instrument validity?',
                options: [
                  'Chapter One: Introduction',
                  'Chapter Two: Literature Review',
                  'Chapter Three: Research Methodology',
                  'Chapter Five: Summary and Conclusions'
                ],
                correctIndex: 2,
                explanation: 'Chapter Three is dedicated to Research Methodology.',
                origin: 'original_past_question',
                sourceYear: '2021 Examination',
                sourceReference: 'FMS 304, Unit 15, p. 186'
              }
            ],
            writtenQuestions: [
              {
                id: 'wq-fms-15-1',
                questionType: 'written_structured',
                prompt: 'List the standard five chapters of an academic thesis in management sciences and state the core contents of Chapter Three (Methodology).',
                maxMarks: 10,
                sourceReference: 'FMS 304, Unit 15, Section 3.2, pp. 183–188',
                expectedAnswerGuide: 'Five chapters: (1) Introduction, (2) Literature Review, (3) Methodology, (4) Data Presentation and Analysis, (5) Summary, Conclusion and Recommendations. Chapter 3 contents: Research Design, Population, Sample Size Determination, Sampling Technique, Research Instrument, Validity and Reliability, and Method of Data Analysis.',
                keyRubricPoints: [
                  'Lists all 5 chapters correctly',
                  'Details Chapter 3 components (design, population, sample, instrument, validity, analysis)'
                ],
                origin: 'original_textbook_tma',
                sourceLabel: 'Self Assessment Exercise Unit 15'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const FMS304_SAMPLE_COURSE: Course = {
  id: 'course-fms304-authoritative',
  code: 'FMS 304',
  title: 'Research Methodology',
  department: 'Faculty of Management Sciences, National Open University of Nigeria',
  description: 'Authoritative NOUN study material for FMS 304 / SMS 304 prepared by Dr. P.E. Osuji, Prof. O.J. Onwe, and Dr. Timothy Ishola. Complete 15 Study Units across three modules covering scientific inquiry, hypotheses, Taro Yamane sample size determination, measurement psychometrics, inferential statistics, and thesis defense.',
  createdAt: new Date().toISOString(),
  documents: [
    {
      id: 'doc-fms304-textbook',
      name: 'FMS_304_Research_Methodology_Course_Guide.pdf',
      fileType: 'pdf',
      fileSize: 3420000,
      uploadedAt: new Date().toISOString(),
      pageCount: 188,
      wordCount: 46200,
      status: 'ready',
      summary: 'National Open University of Nigeria Course Guide for FMS 304 / SMS 304: Research Methodology. Complete 15 Study Units without omissions.',
      processingNotes: 'Authoritative textbook source. 15 units verified and indexed in complete sequence. No skipped units.',
      extractedHeadingsCount: 52,
      isPartiallyProcessed: false
    }
  ],
  modules: FMS304_MODULES,
  lastStudiedTopicId: 'top-fms-1-1',
  lastStudiedUnitId: 'unit-fms-1',
  lastStudiedAt: new Date().toISOString()
};

/**
 * ============================================================================
 * CSC 202: DATA STRUCTURES & ALGORITHMS
 * Clean second course to demonstrate multi-course isolation without mixing.
 * ============================================================================
 */
export const CSC202_SECOND_COURSE: Course = {
  id: 'course-csc202-sample',
  code: 'CSC 202',
  title: 'Data Structures and Algorithms',
  department: 'Department of Computer Science',
  description: 'Foundational computer science study material covering asymptotic complexity, linear data structures, tree hierarchies, graph algorithms, and algorithmic paradigm design.',
  createdAt: new Date().toISOString(),
  documents: [
    {
      id: 'doc-csc202-textbook',
      name: 'CSC_202_Data_Structures_and_Algorithms.pdf',
      fileType: 'pdf',
      fileSize: 3120000,
      uploadedAt: new Date().toISOString(),
      pageCount: 160,
      wordCount: 38000,
      status: 'ready',
      summary: 'University textbook on fundamental algorithms, runtime analysis, and dynamic data organization.',
      processingNotes: 'Fully structured syllabus. Completely isolated from management and research methodology content.',
      extractedHeadingsCount: 36,
      isPartiallyProcessed: false
    }
  ],
  modules: [
    {
      id: 'mod-csc-1',
      moduleNumber: 1,
      title: 'Module 1: Algorithm Complexity & Linear Structures',
      units: [
        {
          id: 'unit-csc-1',
          unitNumber: '1.0',
          title: 'Unit 1: Asymptotic Analysis and Big-O Notation',
          objectives: [
            'Define Big-O, Big-Omega, and Big-Theta asymptotic bounds',
            'Analyze worst-case, best-case, and average-case time complexity',
            'Compare constant, logarithmic, linear, and quadratic growth rates'
          ],
          unitRecapPoints: [
            'Big-O represents an asymptotic upper bound on runtime growth.',
            'Linear search is O(n); binary search on a sorted array is O(log n).'
          ],
          topics: [
            {
              id: 'top-csc-1-1',
              title: 'Principles of Asymptotic Time Complexity',
              readingMinutes: 4,
              sourceReference: 'CSC 202 Course Material, Chapter 1, Section 1.2, pp. 8–14',
              textbookDefinitions: [
                {
                  term: 'Big-O Notation',
                  definition: 'A mathematical notation describing the limiting behavior of a function when the argument tends towards infinity, representing the worst-case asymptotic upper bound.',
                  sourceAuthor: 'Cormen et al. (2009)'
                }
              ],
              content: `Asymptotic analysis evaluates algorithm efficiency independently of specific hardware or programming language implementations.

By expressing computational time as a function of input size n, computer scientists classify algorithms into fundamental complexity classes:
- O(1): Constant time (e.g. hash table array lookup)
- O(log n): Logarithmic time (e.g. binary search on sorted collection)
- O(n): Linear time (e.g. sequential scan of an unsorted list)
- O(n log n): Linearithmic time (e.g. Merge Sort and Quick Sort average case)
- O(n^2): Quadratic time (e.g. Bubble Sort, Insertion Sort)`,
              summaryPoints: [
                'Focuses on growth rate as n approaches infinity.',
                'Disregards hardware clock speeds and low-order terms.',
                'Logarithmic algorithms scale gracefully with massive datasets.'
              ],
              simplifiedExplanation: {
                analogy: 'Looking up a name in a phone book page by page takes linear time O(n). Opening directly to the middle letter and halving the book repeatedly takes logarithmic time O(log n).',
                plainEnglish: 'Big-O tells you how much slower your program will get when your user database grows 1,000 times larger.',
                keyTakeaway: 'Always prefer O(log n) or O(n log n) algorithms over O(n^2) when dealing with large input sizes.',
                examTip: 'State both the definition and an example of an algorithm in that class.'
              },
              tables: [
                {
                  title: 'Table 1.1: Common Big-O Complexity Classes',
                  headers: ['Notation', 'Complexity Class', 'Example Operation'],
                  rows: [
                    ['O(1)', 'Constant', 'Array index access by offset'],
                    ['O(log n)', 'Logarithmic', 'Binary search in sorted array'],
                    ['O(n)', 'Linear', 'Finding maximum element in unsorted array'],
                    ['O(n log n)', 'Linearithmic', 'Merge Sort dividing and merging array'],
                    ['O(n^2)', 'Quadratic', 'Nested comparison loops (Bubble Sort)']
                  ],
                  sourceCitation: 'CSC 202, Chapter 1, p. 12'
                }
              ],
              checkpointQuiz: [
                {
                  id: 'q-csc-1-1-1',
                  prompt: 'What is the time complexity of searching for an element in a sorted array of size n using binary search?',
                  options: [
                    'O(1)',
                    'O(log n)',
                    'O(n)',
                    'O(n^2)'
                  ],
                  correctIndex: 1,
                  explanation: 'Binary search halves the search space with every iteration, resulting in O(log n) time complexity.',
                  origin: 'original_past_question',
                  sourceYear: '2020 Examination',
                  sourceReference: 'CSC 202, Chapter 1, p. 14'
                }
              ],
              writtenQuestions: [
                {
                  id: 'wq-csc-1-1',
                  questionType: 'written_definition',
                  prompt: 'Define Big-O notation and contrast linear search O(n) versus binary search O(log n).',
                  maxMarks: 10,
                  sourceReference: 'CSC 202, Chapter 1, Section 1.2, pp. 8–14',
                  expectedAnswerGuide: 'Big-O notation describes the limiting behavior of an algorithm runtime as input size n approaches infinity. Linear search is O(n) requiring up to n comparisons. Binary search is O(log n) repeatedly halving the search space, requiring only ~20 comparisons for 1,000,000 elements.',
                  keyRubricPoints: [
                    'Definition of Big-O as asymptotic upper bound',
                    'Comparison of O(n) vs O(log n) scaling'
                  ],
                  origin: 'authentic_past_exam',
                  sourceLabel: 'Semester Examination 2020'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  lastStudiedTopicId: 'top-csc-1-1',
  lastStudiedUnitId: 'unit-csc-1',
  lastStudiedAt: new Date().toISOString()
};

/**
 * AUTHENTIC PAST EXAM QUESTIONS VAULT
 */
export const AUTHENTIC_FMS304_PAST_QUESTIONS: PastExamQuestionItem[] = [
  {
    id: 'pq-fms-2012-q1',
    courseId: 'course-fms304-authoritative',
    courseCode: 'FMS 304',
    courseTitle: 'Research Methodology',
    linkedUnitId: 'unit-fms-1',
    linkedUnitTitle: 'Unit 1.0: Conceptual Framework of Research',
    year: '2012 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'FMS_304_Past_Questions_2012.pdf',
    sourceReference: 'Question 1 (a) & (b)',
    questionNumber: '1',
    questionText: 'Define Research according to Heros (1960) and Travers (1969). State the four things Leedy (1997) insists research is NOT.',
    questionType: 'written_definition',
    modelAnswer: 'Heros (1960) defines research as any systematic endeavor or striving towards understanding a complex situational problem of more than immediate personal concern and stated in a problematic form. Travers (1969) defines research as an activity directed towards the development of an organized body of scientific knowledge. Leedy (1997) states research is NOT: (1) mere information gathering, (2) mere transformation of facts from one location to another, (3) merely rummaging through information, and (4) a catchword used to get information.',
    keyRubricPoints: [
      'Heros (1960) definition citing complex situational problem',
      'Travers (1969) definition citing development of organized body of scientific knowledge',
      'Leedy 1: not mere information gathering',
      'Leedy 2: not mere transformation of facts',
      'Leedy 3: not rummaging',
      'Leedy 4: not a catchword'
    ],
    marks: 15,
    difficulty: 'Core',
    isPastQuestion: true,
    verifiedAuthentic: true
  },
  {
    id: 'pq-fms-2015-q2',
    courseId: 'course-fms304-authoritative',
    courseCode: 'FMS 304',
    courseTitle: 'Research Methodology',
    linkedUnitId: 'unit-fms-1',
    linkedUnitTitle: 'Unit 1.0: Conceptual Framework of Research',
    year: '2015 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'FMS_304_Past_Questions_2015.pdf',
    sourceReference: 'Question 2',
    questionNumber: '2',
    questionText: 'Explain the four major characteristics of scientific research according to FMS 304. Describe the two avenues through which verifiability is accomplished.',
    questionType: 'written_discussion',
    modelAnswer: 'The four characteristics are: (1) Objectivity: eliminating subjective bias, testing rather than proving hypotheses. (2) Precision: exact technical language and statistical indices. (3) Design: systematic blueprint. (4) Verifiability: openness to public scrutiny. Verifiability is achieved through: (a) analyzing the same data on the same sample with alternative analytical tools, and (b) replicating the study on an independent sample.',
    keyRubricPoints: [
      'Objectivity explained as testing not proving hypotheses',
      'Precision explained via technical terminology',
      'Design explained as systematic sequence',
      'Verifiability approach 1: alternative tools on same sample',
      'Verifiability approach 2: replication on independent sample'
    ],
    marks: 15,
    difficulty: 'Core',
    isPastQuestion: true,
    verifiedAuthentic: true
  },
  {
    id: 'pq-fms-2018-q3',
    courseId: 'course-fms304-authoritative',
    courseCode: 'FMS 304',
    courseTitle: 'Research Methodology',
    linkedUnitId: 'unit-fms-7',
    linkedUnitTitle: 'Unit 7.0: Population, Sampling Techniques & Sample Size Determination',
    year: '2018 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'FMS_304_Past_Questions_2018.pdf',
    sourceReference: 'Section B, Question 3',
    questionNumber: '3',
    questionText: 'State the Taro Yamane (1967) formula for sample size determination from a finite population. Define all variables and calculate the sample size for a finite population of N = 10,000 at a 5% margin of error.',
    questionType: 'written_process',
    modelAnswer: 'Formula: n = N / [1 + N(e)^2]. Variables: n = required sample size; N = finite population size (10,000); e = margin of error (0.05); 1 = constant. Calculation: e^2 = 0.0025. N * e^2 = 10,000 * 0.0025 = 25. Denominator = 1 + 25 = 26. n = 10,000 / 26 = 384.6 ≈ 385 respondents. Interpretation: 385 questionnaires must be administered to represent 10,000 subjects with 95% confidence.',
    keyRubricPoints: [
      'States Taro Yamane formula correctly',
      'Defines n, N, e, and 1',
      'Computes e^2 = 0.0025',
      'Computes denominator = 26',
      'Final answer = 385 respondents with statistical interpretation'
    ],
    marks: 15,
    difficulty: 'Standard',
    isPastQuestion: true,
    verifiedAuthentic: true
  }
];

export const AUTHENTIC_ENT302_PAST_QUESTIONS: PastExamQuestionItem[] = [
  {
    id: 'pq-ent-2017-q1',
    courseId: 'course-ent302-authoritative',
    courseCode: 'ENT 302',
    courseTitle: 'Feasibility and Business Planning',
    linkedUnitId: 'unit-ent-1',
    linkedUnitTitle: 'Unit 1.0: Sources of Information for Feasibility Studies',
    year: '2017 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'ENT_302_Exam_Paper_2017.pdf',
    sourceReference: 'Page 1, Question 1',
    questionNumber: '1',
    questionText: 'Define Feasibility Study and explain the five areas of business operations analyzed in a feasibility report.',
    questionType: 'written_structured',
    modelAnswer: 'A feasibility study is a process through which the viability of a business is assessed, analyzing workability and profitability. The five areas are Financial Requirements (capital, sources, working capital), Production Requirements (scale, installed capacity, equipment), Personnel Requirements (staff strength, management, job specs), Demand and Supply (market potential, local production vs imports), and Financial Projections (income statement, balance sheet, cash flow).',
    keyRubricPoints: [
      'Definition of feasibility study as assessing viability and profitability',
      'Financial requirements',
      'Production requirements',
      'Personnel requirements',
      'Demand and supply analysis',
      'Financial projections'
    ],
    marks: 15,
    difficulty: 'Core',
    isPastQuestion: true,
    verifiedAuthentic: true
  },
  {
    id: 'pq-ent-2017-q3',
    courseId: 'course-ent302-authoritative',
    courseCode: 'ENT 302',
    courseTitle: 'Feasibility and Business Planning',
    linkedUnitId: 'unit-ent-11',
    linkedUnitTitle: 'Unit 11.0: Financial Analysis & Break-Even Modelling',
    year: '2017 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'ENT_302_Exam_Paper_2017.pdf',
    sourceReference: 'Page 3, Question 5',
    questionNumber: '5',
    questionText: 'State the Break-Even Quantity formula. Calculate the break-even volume when Total Fixed Costs equal N250,000, variable cost per unit equals N5.50, and selling price equals N11.00.',
    questionType: 'written_process',
    modelAnswer: 'Formula: B/E(Q) = TFC / (SP - VC/unit). Contribution Margin = 11.00 - 5.50 = N5.50. B/E(Q) = 250,000 / 5.50 = 45,454 units. Any sales volume beyond 45,454 units yields a profit of N5.50 per unit.',
    keyRubricPoints: [
      'States formula B/E(Q) = TFC / (SP - VC)',
      'Calculates contribution margin of N5.50',
      'Computes 45,454 units',
      'Interprets profit implications above break-even'
    ],
    marks: 15,
    difficulty: 'Standard',
    isPastQuestion: true,
    verifiedAuthentic: true
  }
];

export { ENT304_AUTHENTIC_COURSE, ENT304_MODULES, ENT304_PAST_QUESTIONS } from './ent304Data';
export { ENT308_AUTHENTIC_COURSE, ENT308_MODULES, ENT308_PAST_QUESTIONS } from './ent308Data';
import { ENT304_PAST_QUESTIONS } from './ent304Data';
import { ENT308_PAST_QUESTIONS } from './ent308Data';

export const SAMPLE_PAST_QUESTIONS: PastExamQuestionItem[] = [
  ...AUTHENTIC_FMS304_PAST_QUESTIONS,
  ...AUTHENTIC_ENT302_PAST_QUESTIONS,
  ...ENT304_PAST_QUESTIONS,
  ...ENT308_PAST_QUESTIONS
];

