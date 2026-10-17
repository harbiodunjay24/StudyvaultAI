import { Course, PastExamQuestionItem, StudyModule, StudyUnit, StudyTopic } from '../types';

/**
 * ============================================================================
 * ENT 308: FAMILY BUSINESS AND SUCCESSION PLANNING
 * Authoritative NOUN Study Guide & Textbook Dataset
 *
 * Course Team:
 * - Course Writer: Dr. (Mrs) Bamidele Wale-Oshinowo (University of Lagos)
 * - Course Editor: Prof. Emerole Gideon Ahamefula (Michael Okpara University)
 * - Head of Department: Dr. Lawal Kamaldeen A. A (NOUN)
 * - Dean: Dr. Timothy Ishola (NOUN)
 * - Publisher: National Open University of Nigeria (2017)
 * ============================================================================
 */

export const ENT308_MODULES: StudyModule[] = [
  // --------------------------------------------------------------------------
  // MODULE 1: INTRODUCTION (Units 1 - 4)
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent308-1',
    title: 'Module 1: Introduction to Family Business',
    order: 1,
    description: 'Foundations of family business, historical perspectives, early research, and world/Nigerian family dynasties.',
    units: [
      {
        id: 'unit-ent308-1',
        title: 'Unit 1: The Concept and Pervasiveness of Family Business',
        unitNumber: 1,
        sourceChapter: 'Module 1, Unit 1',
        pageRange: 'Pages 7-9',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-1-1',
            title: '1.1 Co-existence of Families and Business Worldwide',
            order: 1,
            sourceReference: 'ENT 308, Module 1, Unit 1, Pages 7-8',
            content: `Family business is the most prevalent form of business in the world (Colli, 2003). Throughout history and worldwide, families and business have always co-existed to a large extent mainly because most businesses commenced with the underlying motivation to earn a living and support a family. While the business provides financially for the family, the family provides human resources which could be paid or unpaid for the business. This is why Aldrich and Cliff (2003) argued in their widely referenced article that families and businesses are inextricably intertwined.

Micro, small, medium or large, family businesses are represented in all business sectors and their pervasiveness is non-rivalled in the world. Today, the scope of family-involved businesses has expanded to include some of the world's largest companies with massive economic impact. In all markets, family owned businesses form the bedrock of advancing economies, playing an essential role in employment, income generation, and wealth accumulation.`,
            simplifiedExplanation: {
              analogy: 'Imagine a household kitchen that starts baking pies to pay bills; the family members bake and package together, feeding each other while growing a bakery that spans generations.',
              coreConcept: 'Families and businesses are inextricably intertwined (Aldrich & Cliff, 2003): the business provides financial sustenance while the family provides dedicated, flexible human resources.',
              practicalExample: 'Small local grocery shops and global multinational conglomerates like Wal-Mart both operate under family stewardship.',
              keyTakeaway: 'Family businesses constitute the predominant business structure globally across all sizes, from micro-enterprises to Fortune 500 giants.'
            },
            keyTerms: ['Pervasiveness', 'Inextricably Intertwined', 'Human Resources', 'Wealth Accumulation'],
            textbookDefinitions: [
              {
                term: 'Family-Business Intertwining',
                definition: 'The symbiotic relationship where the business provides financially for the family while the family provides paid or unpaid human resources for the business.',
                sourceAuthor: 'Aldrich & Cliff (2003)'
              }
            ],
            summaryPoints: [
              'Family business is the most prevalent form of enterprise globally (Colli, 2003).',
              'Aldrich and Cliff (2003) established that family and business are inextricably intertwined.',
              'Family businesses exist at all scales: micro, small, medium, and massive multinational corporations.'
            ]
          },
          {
            id: 'top-ent308-1-2',
            title: '1.2 Longevity and the Japanese Family Business Model',
            order: 2,
            sourceReference: 'ENT 308, Module 1, Unit 1, Pages 8-9',
            content: `Japan is home to some of the oldest recorded family-controlled businesses in history. Notable examples and their founding dates include:
1. Hoshi Ryokan (founded 718 AD - hot spring inn)
2. Toraya (founded 1600 - confectionery)
3. Enshu Sado School (founded 1602 - tea ceremony)
4. Takenaka Corporation (founded 1610 - construction)
5. Kikkoman Corporation (founded 1630 - soy sauce)
6. Sumitomo (founded 1630 - copper and industrial conglomerate)

Japan represents a significant radar in Family Business Research because its family firms place high importance on the retention of family ownership and preservation of the business traditions for the next generation. A survey in Japan showed that:
- 80 percent of family firms have a family member as CEO.
- Three out of five (60%) firms are 100 percent family-owned.
- The remaining companies are more than 50 percent family-owned.

Overall, family businesses tend to emphasize firm longevity and sustainability over short-term quarterly profit, a philosophy typified by the Japanese Family Business Model.`,
            simplifiedExplanation: {
              analogy: 'Unlike a quarterly-profit driven hedge fund, a centuries-old inn views the company as a sacred ancestral relay baton to be polished and handed to grandchildren intact.',
              coreConcept: 'The Japanese family business model prioritizes multi-generational continuity, tradition preservation, and patient capital over immediate short-term windfalls.',
              practicalExample: 'Hoshi Ryokan operated continuously for over 1,300 years under more than 46 generations of the same family.',
              keyTakeaway: 'Prioritizing trans-generational sustainability over quarterly earnings enables family firms to withstand centuries of economic crises.'
            },
            keyTerms: ['Hoshi Ryokan (718)', 'Kikkoman (1630)', 'Sumitomo (1630)', 'Longevity', 'Patient Capital'],
            textbookDefinitions: [
              {
                term: 'Japanese Family Business Model',
                definition: 'An organizational paradigm emphasizing multi-generational longevity, preservation of family traditions, and high family ownership concentration (80% family CEOs).',
                sourceAuthor: 'NOUN ENT 308 Course Guide'
              }
            ],
            summaryPoints: [
              'Japan hosts the oldest family businesses: Hoshi Ryokan (718), Takenaka (1610), Kikkoman (1630), Sumitomo (1630).',
              '80% of Japanese family firms are led by a family CEO, and 60% are 100% family owned.',
              'Longevity and multi-generational stewardship take precedence over short-term profit.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u1-1',
            prompt: 'Explain why Aldrich and Cliff (2003) described families and businesses as "inextricably intertwined", and illustrate how the Japanese family business model exemplifies organizational longevity.',
            sourceLabel: 'ENT 308 TMA Checkpoint 1',
            sourceReference: 'ENT 308 Module 1, Unit 1, Pages 7-9',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 1:
1. Intertwining Concept (Aldrich & Cliff, 2003): The business and the family co-exist symbiotically. The business provides financial sustenance, income, and lifestyle support for the family, while the family provides vital human capital (paid and unpaid labor), commitment, and flexible resources.
2. Pervasiveness: Family businesses constitute 80-90% of global business entities and form the bedrock of economic advancement.
3. Japanese Model of Longevity: Japan exemplifies trans-generational continuity. Examples include Hoshi Ryokan (718 AD), Takenaka (1610), Kikkoman (1630), and Sumitomo (1630).
4. Survey Data: 80% of Japanese family firms have a family member CEO, 60% are 100% family owned, demonstrating focus on sustainable trans-generational stewardship over short-term profits.`,
            keyRubricPoints: [
              'Cites Aldrich & Cliff (2003) on symbiotic resource and financial exchange',
              'Explains family provides human resources (paid/unpaid) while business provides financial support',
              'Mentions Japanese historical firms with founding dates (Hoshi Ryokan 718, Takenaka 1610, Kikkoman 1630)',
              'Notes 80% family CEO and 60% full family ownership statistics in Japan',
              'Explains longevity and sustainability prioritized over short-term quarterly profits'
            ]
          }
        ]
      },
      {
        id: 'unit-ent308-2',
        title: 'Unit 2: Historical Review of Family Business Dynasties',
        unitNumber: 2,
        sourceChapter: 'Module 1, Unit 2',
        pageRange: 'Pages 10-15',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-2-1',
            title: '2.1 Historical Dynasties in Western Europe and America',
            order: 1,
            sourceReference: 'ENT 308, Module 1, Unit 2, Pages 10-13',
            content: `Historically, family businesses came into prominence during the early stages of industrialisation in the 18th and 19th centuries in Western Europe (Colli, Fernandez-Perez, & Rose, 2003). Wealthy families rescued failing economies and practically controlled national commerce.

Prominent Historical Dynasties:
1. The Rothschild Family: Of Jewish descent, merchant bankers in the mid-18th century who perfected absolute discretion. Started as omnibus traders, grew into the richest dynasty in Europe. Mayer Amschel Rothschild (1777-1836) placed his five sons in five major European capitals (London, Paris, Frankfurt, Vienna, Naples) bound by trust, loyalty, and the family motto: "Concordia, Integritas, Industria" (Unity, Integrity, Industry).
2. Kongo Gumi Co. Ltd (Japan): Founded in 578 AD, recorded as the oldest operating firm in the world for approximately 1,400 years until sold to Takamatsu Corporation in January 2006.
3. Cornelius Vanderbilt (USA): Shipping and railroad empire in the 1800s; 7th richest family in history, though dissipated within 50 years after Cornelius's death due to lack of succession planning.
4. John D. Rockefeller (1839-1937, USA): Standard Oil, built massive fortune starting with a $1,000 loan from his father at 10% interest.
5. Henry Ford (1863-1947, USA): Ford Motor Company, migrated from Ireland in 1832. Built lightweight, durable motorized four-wheelers initially to assist farmers.
6. Baring Bank (UK): Oldest merchant bank in the UK, founded by Dutch cloth merchants who migrated to London.`,
            simplifiedExplanation: {
              analogy: 'Mayer Rothschild acted like a master chess general, dispatching his five trusted sons to five major European financial capitals, keeping communication secret and agency costs zero.',
              coreConcept: 'Dynastic family businesses dominated early modern industrialization by deploying family trust, shared values, and minimal agency costs across geographic borders.',
              practicalExample: 'Rothschild merchant banking operated smoothly across 5 capitals because family loyalty prevented embezzlement and betrayal.',
              keyTakeaway: 'Family cohesion and trust provide extraordinary competitive advantages, but trans-generational succession planning determines whether wealth survives.'
            },
            keyTerms: ['Rothschilds', 'Kongo Gumi (578 AD)', 'Vanderbilt', 'Rockefeller', 'Henry Ford', 'Motto: Concordia, Integritas, Industria'],
            textbookDefinitions: [
              {
                term: 'Rothschild Family Model',
                definition: 'A trans-national banking dynasty governed by extreme family loyalty, geographic dispersion of blood heirs, strict secrecy, and minimal agency costs.',
                sourceAuthor: 'Bertrand & Schoar (2006)'
              }
            ],
            summaryPoints: [
              'Family business prominence arose during 18th/19th century industrialisation in Western Europe.',
              'Mayer Rothschild established 5 banking branches in London, Paris, Frankfurt, Vienna, and Naples governed by unity, integrity, and industry.',
              'Kongo Gumi was founded in 578 AD and survived 1,400 years under 40 generations.',
              'Vanderbilt, Rockefeller, Ford, and Baring Bank illustrate diverse trajectories of wealth creation and succession.'
            ]
          },
          {
            id: 'top-ent308-2-2',
            title: '2.2 Modern Global and European Family Dynasties',
            order: 2,
            sourceReference: 'ENT 308, Module 1, Unit 2, Pages 14-15',
            content: `Family-owned businesses continue to dominate global commerce in the 21st century:
- Wal-Mart (USA): Owned by the Walton family, world's largest retailer, consistently top 10 on Forbes 400 since 2001.
- Volkswagen (Germany): Controlled by the Piëch-Porsche family.
- Roche (Switzerland): Pharmaceutical titan controlled by the Hoffmann-Oeri families who leverage long-term horizons for drug development.
- Novartis (Switzerland): Sandoz family is the largest single shareholder.
- Italian Dynasties: Benettons, Rivas, Lucchinis.
- German Mittelstand: Demonstrated remarkable stability through both World Wars and global recessions (Schumann, 1999).`,
            simplifiedExplanation: {
              analogy: 'German Mittelstand family firms are the resilient shock absorbers of European industry, surviving world wars and depressions because they think in generations, not quarters.',
              coreConcept: 'Modern family firms are not obsolete relics; they command leading global enterprises in retail, automotive, and pharmaceuticals.',
              practicalExample: 'Roche tackles high-risk diseases because the Hoffmann family board allows long research horizons.',
              keyTakeaway: 'Family businesses continue to anchor global industrial stability and market leadership.'
            },
            keyTerms: ['Walton Family (Wal-Mart)', 'Piëch-Porsche (Volkswagen)', 'Hoffmann-Oeri (Roche)', 'Mittelstand'],
            textbookDefinitions: [
              {
                term: 'Mittelstand',
                definition: 'German family-owned enterprises characterized by high specialization, long-term orientation, and remarkable resilience across economic cycles.',
                sourceAuthor: 'Schumann (1999)'
              }
            ],
            summaryPoints: [
              'Wal-Mart (Waltons) has remained in the top 10 of Forbes 400 since 2001.',
              'Volkswagen, Roche, and Novartis reflect massive European family ownership.',
              'German family firms provided economic stability throughout global recessions.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u2-1',
            prompt: 'Detail the governance strategy adopted by Mayer Rothschild to build his European banking empire, and contrast the longevity of Kongo Gumi with the Vanderbilt shipping empire.',
            sourceLabel: 'ENT 308 TMA Checkpoint 2',
            sourceReference: 'ENT 308 Module 1, Unit 2, Pages 11-12',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 2:
1. Rothschild Strategy: Mayer Amschel Rothschild stationed his five sons across five key financial capitals (London, Paris, Frankfurt, Vienna, Naples). They operated on strict family loyalty, discretion, mutual trust, and the family motto: "Concordia, Integritas, Industria". This eliminated agency costs and enabled fast, coordinated cross-border transactions.
2. Kongo Gumi Longevity: Founded in Japan in 578 AD as temple builders, Kongo Gumi remained in the same family for approximately 1,400 years (over 40 generations) before being acquired by Takamatsu in 2006, proving extraordinary cultural resilience.
3. Vanderbilt Contrast: Cornelius Vanderbilt created one of the richest shipping and railroad empires in the 1800s (7th richest in history). However, within 50 years after his death, the fortune was largely dissipated due to lack of a cohesive succession plan and destructive family dynamics.`,
            keyRubricPoints: [
              'Identifies Mayer Rothschild and his 5 sons across 5 European capitals',
              'States Rothschild motto (Concordia, Integritas, Industria / Unity, Integrity, Industry)',
              'Notes minimization of agency costs through family trust and discretion',
              'Details Kongo Gumi founding in 578 AD and 1,400-year survival',
              'Contrasts with Vanderbilt empire destruction within 50 years after founder death'
            ]
          }
        ]
      },
      {
        id: 'unit-ent308-3',
        title: 'Unit 3: Evolution of Family Business Research',
        unitNumber: 3,
        sourceChapter: 'Module 1, Unit 3',
        pageRange: 'Pages 16-20',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-3-1',
            title: '3.1 Historical Development of the Academic Field',
            order: 1,
            sourceReference: 'ENT 308, Module 1, Unit 3, Pages 16-18',
            content: `Family business was not accepted as an independent field of academic research until the mid-1970s. Key founding scholars and practitioners include:
- Richard Beckhard, Leon Danco, Gibb Dyer, Barbara Hollander, Ivan Lansberg, Harry Levinson, and John Ward.
- Renowned economic historian David S. Landes provided foundational historical documentation.

Watershed Events:
1. 1975: Dr. Leon Danco published his pioneering book, "Beyond Survival: A Guide for the Business Owner and His Family".
2. 1979: Organizational Dynamics published a special landmark issue on family business.
3. 1986: Family Firm Institute (FFI) was founded, and Family Business Review (FBR) was launched as the first dedicated specialist journal (first published 1988).
4. 1990: Family Business Network-International (FBN-I) established.
5. 2001: International Family Business Research Academy (IFERA) and UK Institute for Family Business (IFB) established.`,
            simplifiedExplanation: {
              analogy: 'Before 1975, family business was treated like casual kitchen folklore; Danco, Beckhard, and the 1986 launch of Family Business Review turned it into a rigorous university science.',
              coreConcept: 'The discipline shifted from anecdotal consultant advice to a peer-reviewed academic field anchored by specialized journals, research centers, and theory building.',
              practicalExample: 'Universities like Harvard, Kennesaw State, and Cambridge established dedicated family business research chairs.',
              keyTakeaway: 'Leon Danco (1975) and the founding of Family Business Review (1988) legitimized family business as an academic discipline.'
            },
            keyTerms: ['Leon Danco (1975)', 'Beyond Survival', 'Family Business Review (1988)', 'FFI', 'IFERA', 'David S. Landes'],
            textbookDefinitions: [
              {
                term: 'Beyond Survival (1975)',
                definition: 'The pioneering foundational book by Dr. Leon Danco that launched the formal study of family business management and succession.',
                sourceAuthor: 'Dr. Leon Danco (1975)'
              }
            ],
            summaryPoints: [
              'Family business emerged as a distinct discipline in the mid-1970s.',
              'Pioneering authors: Beckhard, Danco, Dyer, Hollander, Lansberg, Levinson, Ward.',
              'Two watershed events: 1979 Organizational Dynamics special issue, and 1986/1988 Family Business Review launch.'
            ]
          },
          {
            id: 'top-ent308-3-2',
            title: '3.2 Core Journals and Emerging Theoretical Constructs',
            order: 2,
            sourceReference: 'ENT 308, Module 1, Unit 3, Pages 19-20',
            content: `According to Chrisman, Kellermanns, Chan and Liano (2010), the four most cited outlets for family business research are:
1. Entrepreneurship Theory and Practice (ET&P)
2. Family Business Review (FBR)
3. Journal of Business Venturing (JBV)
4. Journal of Small Business Management (JSBM)

Emerging Theoretical Constructs:
- Familiness (Habbershon & Williams 1999)
- Family Orientation (Lumpkin et al. 2008)
- Family influence on Power, Experience, and Culture (F-PEC Scale)
- Family embeddedness and family-centered non-economic goals.
- Research focus has shifted from "firm level" alone to "family level", examining the cognitive and emotional dynamics of family involvement.`,
            simplifiedExplanation: {
              analogy: 'Looking only at balance sheets misses the dinner-table conversations; shifting to the "family level" reveals the real emotional engine of the company.',
              coreConcept: 'Modern family business scholarship integrates social capital, psychology, and organizational economics through specialized constructs like familiness and non-economic goals.',
              practicalExample: 'FBR and ET&P publish studies evaluating how family harmony impacts corporate risk-taking.',
              keyTakeaway: 'Family business research shifted from pure financial balance-sheet metrics to examining systemic family interactions.'
            },
            keyTerms: ['Chrisman et al. (2010)', 'ET&P', 'FBR', 'Familiness', 'Non-economic Goals'],
            textbookDefinitions: [
              {
                term: 'Family-Level Focus',
                definition: 'The theoretical paradigm shift examining emotional, psychological, and relational dynamics of the family rather than treating the business as an isolated commercial firm.',
                sourceAuthor: 'Wale-Oshinowo (2015)'
              }
            ],
            summaryPoints: [
              'Top 4 journals: ET&P, FBR, JBV, JSBM (Chrisman et al., 2010).',
              'Key constructs include familiness, family orientation, and F-PEC.',
              'Shift from firm-level analysis to family-level dynamics.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u3-1',
            prompt: 'Identify the pioneering scholars of family business research, name the two watershed events that established the field, and list the top four academic journals identified by Chrisman et al. (2010).',
            sourceLabel: 'ENT 308 TMA Checkpoint 3',
            sourceReference: 'ENT 308 Module 1, Unit 3, Pages 16-19',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 3:
1. Pioneering Scholars: Dr. Leon Danco (author of Beyond Survival, 1975), Richard Beckhard, Gibb Dyer, Barbara Hollander, Ivan Lansberg, Harry Levinson, John Ward, and historian David S. Landes.
2. Two Watershed Events:
   - The publication of a special issue of the journal Organizational Dynamics in 1979.
   - The launching of the specialized journal Family Business Review (FBR) in 1986 (first published 1988).
3. Top Four Academic Journals (Chrisman et al., 2010):
   - Entrepreneurship Theory and Practice (ET&P)
   - Family Business Review (FBR)
   - Journal of Business Venturing (JBV)
   - Journal of Small Business Management (JSBM).`,
            keyRubricPoints: [
              'Names Dr. Leon Danco and mentions 1975 work "Beyond Survival"',
              'Lists other pioneers: Beckhard, Dyer, Hollander, Lansberg, Levinson, Ward',
              'Identifies 1979 Organizational Dynamics special issue as watershed event 1',
              'Identifies 1986/1988 Family Business Review launching as watershed event 2',
              'Accurately lists the 4 journals from Chrisman et al. (2010): ET&P, FBR, JBV, JSBM'
            ]
          }
        ]
      },
      {
        id: 'unit-ent308-4',
        title: 'Unit 4: Examples of Notable Family Businesses in the World and Nigeria',
        unitNumber: 4,
        sourceChapter: 'Module 1, Unit 4',
        pageRange: 'Pages 61-63',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-4-1',
            title: '4.1 Prominent Global Family Firms',
            order: 1,
            sourceReference: 'ENT 308, Module 1, Unit 4, Pages 61-62',
            content: `Notable international family enterprises across diverse continents include:
- USA: Nike (Knight Family), Wal-Mart (Walton Family), McKesson (McKesson Family), News Corporation (Murdoch Family), Phillips 66 (Phillips Family), Mars, Bechtel, Estee Lauder, Levi Strauss.
- United Kingdom: Sainsbury (family-owned and managed for 129 years until David Sainsbury retired as Chairman in 1998).
- France: Peugeot, Hermes, Michelin, Bic, Marie Brizard, L'Oreal.
- Japan: SoftBank (Masayoshi Son Family), Hoshi Ryokan (Houshi Family), Toraya, Kikkoman.
- India: Tata Group (Tata Family), Dabur Group (Burman Family), Reliance Industries (Ambani Family).
- Europe: Tetra Laval & H&M (Wallenberg & Persson in Sweden); Fiat, Benetton, Luxottica, Zegna, Ferrero, Barilla (Italy); Salvat (Spain); Lego (Denmark); Richemont (Rupert Family in Switzerland); C&A (Netherlands).
- Asia: Sun Hung Kai Properties (Kwok Family, Hong Kong), Foxconn (Gou Family, Taiwan), Sing Holdings (Huang Family, Singapore).`,
            simplifiedExplanation: {
              analogy: 'Every time you eat a Mars chocolate bar, wear Nike shoes, or buy groceries at Sainsbury, you are interacting with the vision of an entrepreneurial family.',
              coreConcept: 'Household consumer brands and heavy industrial conglomerates across the globe are sustained through family capital and leadership.',
              practicalExample: 'The Tata family built India\'s largest conglomerate spanning steel, software (TCS), and automotive.',
              keyTakeaway: 'Family firms are the primary drivers of global commerce across Europe, America, and Asia.'
            },
            keyTerms: ['Nike (Knights)', 'Sainsbury (129 years)', 'Tata Group', 'Reliance (Ambani)', 'Lego', 'Foxconn'],
            textbookDefinitions: [
              {
                term: 'Multi-Generational Global Enterprise',
                definition: 'A multinational corporation where controlling ownership and board influence have been sustained across successive family generations.',
                sourceAuthor: 'NOUN ENT 308 Course Guide'
              }
            ],
            summaryPoints: [
              'Global icons like Nike, Wal-Mart, Mars, and Levi Strauss are family-backed.',
              'Sainsbury was managed by the family for 129 consecutive years.',
              'Tata and Reliance represent multi-billion-dollar dynastic powerhouses in India.'
            ]
          },
          {
            id: 'top-ent308-4-2',
            title: '4.2 Notable Family Business Dynasties in Nigeria',
            order: 2,
            sourceReference: 'ENT 308, Module 1, Unit 4, Pages 62-63',
            content: `According to the compilation by Wale-Oshinowo (2017), prominent Nigerian businesses with family involvement include:
1. Mike Adenuga Group of Companies: Conoil Producing Nigeria Limited and Globacom Limited (Adenuga Family).
2. Ekene Dili Chukwu Group of Companies: Transportation and logistics pioneer (Chief Augustine Ilodibe Family).
3. Honeywell Group Nigeria: Conglomerate in food, energy, real estate (Ayoola Oba Otudeko Family).
4. Sani Brothers Group / Azman Oil & Gas Ltd: (Abdulmunafi Family).
5. Isyaku Rabiu and Sons (IRS): Industrial and trade conglomerate (Isyaku Rabiu Family, Kano).
6. Kabo Holdings: Aviation pioneer (Alhaji Adamu Dankabo Family).
7. Mai Deribe's Venture: Commerce, real estate (Alhaji Mai Deribe Family, Maiduguri).
8. Nigerian Tribune: Established 1949, publishing (Late Chief Obafemi Awolowo Family).
9. Henry Stephens Group: Shipping and commodities (Chief Henry Fajemirokun Family).
10. First City Group: Banking and financial services (Otunba Subomi Balogun Family).
11. Adebola Adegunwa Group (Adegunwa Family).
12. The Punch Newspaper: Media (Chief James Aboderin Family).
13. Folawiyo Group of Companies: Shipping, energy, agriculture (Chief Wahab Folawiyo Family).
14. Eleganza Group: Manufacturing (Chief Rasheed Okoya Family).
15. Elizade Group: Automotive distribution, Toyota franchise (Chief Michael Ade Ojo Family).
16. Orange Drugs Group: Pharmaceuticals and FMCG (Sir Tony Ezenna Family).
17. BUA Group: Manufacturing, sugar, cement (Abdulsamad Rabiu Family).
18. Ibeto Group: Cement, automotive parts (Chief Cletus Ibeto Family).
19. Fagbohun Tailors (Fagbohun Family).
20. Tejuosho Group (Tejuosho Family).
21. Ibru Business Dynasty: Seafood, agriculture, hospitality, aviation (Michael Ibru Family).
22. Dominos Stores / Silverbird Cinemas: Media and entertainment (Ben Murray-Bruce Family).
23. Diamond Bank: Financial services (Pascal Dozie Family).`,
            simplifiedExplanation: {
              analogy: 'From the newspaper you read in the morning (Punch, Tribune) to the telecommunications network (Globacom) and supermarket goods (Eleganza, Honeywell), Nigerian family dynasties built the commercial fabric of the nation.',
              coreConcept: 'Indigenous Nigerian enterprise has historically been driven by entrepreneurial founding families across trade, manufacturing, logistics, media, and banking.',
              practicalExample: 'Chief Michael Ade Ojo built Elizade into the leading Toyota distributor in West Africa through family-guided integrity.',
              keyTakeaway: 'Family firms constitute the backbone of Nigeria\'s private sector and indigenous industrial development.'
            },
            keyTerms: ['Mike Adenuga (Globacom)', 'Ekene Dili Chukwu (Ilodibe)', 'Honeywell (Otudeko)', 'Elizade (Ade Ojo)', 'Ibru Dynasty', 'Silverbird (Bruce)'],
            textbookDefinitions: [
              {
                term: 'Indigenous Family Dynasties (Nigeria)',
                definition: 'Prominent Nigerian business groups founded by indigenous entrepreneurs where ownership, management, and succession reside predominantly within the founder’s family.',
                sourceAuthor: 'Wale-Oshinowo (2017)'
              }
            ],
            summaryPoints: [
              'Wale-Oshinowo (2017) compiled key Nigerian family enterprises.',
              'Major names: Adenuga (Globacom/Conoil), Ilodibe (Ekene Dili Chukwu), Otudeko (Honeywell), Folawiyo, Okoya (Eleganza), Ade Ojo (Elizade).',
              'Span transportation, publishing, energy, telecoms, banking, and manufacturing.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u4-1',
            prompt: 'Identify at least six notable Nigerian family business dynasties compiled by Wale-Oshinowo (2017), state the respective family name, and mention the primary industry or business enterprise associated with each.',
            sourceLabel: 'ENT 308 TMA Checkpoint 4',
            sourceReference: 'ENT 308 Module 1, Unit 4, Pages 62-63',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 4:
Six notable Nigerian family dynasties from Wale-Oshinowo (2017):
1. Mike Adenuga Group: Adenuga Family (Telecommunications - Globacom, Energy - Conoil Producing).
2. Ekene Dili Chukwu Group: Ilodibe Family (Transport, logistics, and automobile dealership).
3. Honeywell Group: Otudeko Family (Food processing, flour milling, energy, real estate).
4. Elizade Group: Ade Ojo Family (Automotive distribution, exclusive Toyota dealership).
5. Eleganza Group: Okoya Family (Plastics and household consumer manufacturing).
6. Nigerian Tribune / The Punch: Awolowo Family / Aboderin Family (Print journalism and newspaper publishing).
7. Ibru Business Dynasty: Michael Ibru Family (Fisheries, agriculture, aviation, hospitality).
8. Silverbird Group: Bruce Family (Media, radio, cinema, and entertainment).`,
            keyRubricPoints: [
              'Lists at least 6 distinct Nigerian family dynasties',
              'Correctly associates each business with the owning family (e.g., Adenuga, Ilodibe, Otudeko, Ade Ojo, Okoya, Ibru)',
              'Accurately names the business or sector (Globacom, Ekene Dili Chukwu, Honeywell, Elizade, Eleganza)',
              'Cites Wale-Oshinowo (2017) as the authoritative source',
              'Demonstrates understanding of family business impact on Nigeria\'s indigenous economy'
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 2: DEFINING THE FAMILY BUSINESS (Units 1 - 2)
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent308-2',
    title: 'Module 2: Defining the Family Business and Its Dynamics',
    order: 2,
    description: 'Family attributes, Table 2 & 3 functions, Family Orientation construct, 2-circle and 3-circle models, familiness, and classification schemes.',
    units: [
      {
        id: 'unit-ent308-5',
        title: 'Unit 1: The Distinctiveness Between Family and Non-Family Firms',
        unitNumber: 1,
        sourceChapter: 'Module 2, Unit 1',
        pageRange: 'Pages 21-32',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-5-1',
            title: '5.1 Defining the Family: Biological, Legal and Relational Ties',
            order: 1,
            sourceReference: 'ENT 308, Module 2, Unit 1, Pages 21-26',
            content: `A family is referred to as a permanent body consisting of individuals who are bound together by 'obligation' rather than by contract as in corporate organizations (Lumpkin, Cogliser, & Schneider, 2008). 

Definition by U.S. Bureau of the Census (1998c):
A group of two or more persons related by birth, marriage, or adoption and residing together. Modern science has introduced surrogacy, and legal frameworks have introduced adoption.

Functions of Individual Family Members to the Family (Table 2):
1. Obligation: Sense of duty to preserve and obey family rules.
2. Culture: Way of life, beliefs, and attitudes (Dyer, 1986).
3. Values: Teaching unity, love, tolerance, honesty, charity, and entrepreneurial behavior.
4. Ethics: Moral sense of right-doing, protecting family reputation (Lumpkin et al., 2008).
5. Trust: Demands loyalty, honesty, and mutual vulnerability (Sundaramurthy, 2008).
6. Procreation: Ensuring the family line does not go into extinction, protecting generational assets (Bertrand & Schoar, 2006).

Functions of the Family to Members and Community (Table 3, Patterson 2002):
- Membership: Sense of belonging and identity; controls reproduction in community.
- Economic Support: Food, shelter, financial assistance; prevents public dependency.
- Training: Nurturing in values, skills, education; prevents antisocial behavior.
- Security: Physical, psychological, and emotional protection; prepares good citizens.`,
            simplifiedExplanation: {
              analogy: 'In a corporation, if you fail your contract you get fired. In a family, members are bound by moral obligation and blood: you cannot easily "fire" your brother or child.',
              coreConcept: 'Families operate on moral obligation, shared culture, and reciprocal support rather than corporate legal contracts.',
              practicalExample: 'When financial distress hits, family members work extra hours without overtime pay because they feel an obligation to preserve the family name.',
              keyTakeaway: 'The six individual functions (Obligation, Culture, Values, Ethics, Trust, Procreation) differentiate family social systems from contractual corporate entities.'
            },
            keyTerms: ['Obligation vs Contract', 'Table 2 Functions', 'Table 3 Patterson (2002)', 'Procreation', 'Trust'],
            textbookDefinitions: [
              {
                term: 'Family',
                definition: 'A permanent body consisting of individuals bound together by obligation rather than by contract.',
                sourceAuthor: 'Lumpkin, Cogliser, & Schneider (2008)'
              }
            ],
            summaryPoints: [
              'Families are bound by obligation rather than contractual employment.',
              'Table 2 outlines 6 individual member duties: Obligation, Culture, Values, Ethics, Trust, Procreation.',
              'Table 3 (Patterson 2002) details 4 institutional functions: Membership, Economic Support, Training, Security.'
            ]
          },
          {
            id: 'top-ent308-5-2',
            title: '5.2 The Family Orientation (FO) Construct',
            order: 2,
            sourceReference: 'ENT 308, Module 2, Unit 1, Pages 26-32',
            content: `Lumpkin, Martin and Vaughn (2008) developed the Family Orientation ('FO') construct based on Bowen's Family Systems Theory and Contextual Family Therapy to explain how individual members relate to the family.

Five Dimensions of Family Orientation:
1. Tradition: Recognition of shared history and practices. Characteristics:
   - Identification of roles based on mutual parental/child expectations.
   - Rituals (emotional, celebrations, holidays) and Routines (perfunctory daily tasks).
   - Sharing same history and similar approaches to issues.
   - Legacy: maintaining family reputation.
2. Stability: Sense of permanence. Characteristics:
   - Homeostasis (maintaining balance and posture).
   - Predictable interaction patterns.
   - Governed by rules and set boundaries.
   - Resistance to abrupt change; desire for continuity.
   - Penalties for unacceptable behavior.
3. Loyalty: Central force binding the family together (Lumpkin et al., 2008:132).
   - Sense of duty, commitment, priority on togetherness, and guilt-guided indebtedness.
   - Exemplified by Mayer Rothschild's tight control over his 5 sons.
4. Trust: Psychological state accepting vulnerability based on positive expectations (Rousseau et al., 1998; Sundaramurthy, 2008).
   - Safety, protection, fairness, reciprocity, trustworthiness.
5. Interdependency: Reliance on one another across physical, emotional, and financial spheres.
   - Cohesion, emotional ties, mutual support without heavy solicitation.`,
            simplifiedExplanation: {
              analogy: 'Family Orientation is like the magnetic field of a family; tradition gives it history, stability keeps it balanced, loyalty holds it together, trust makes it safe, and interdependency lets members lean on each other.',
              coreConcept: 'The FO construct explains the internal socio-emotional glue (Tradition, Stability, Loyalty, Trust, Interdependency) that shapes family members\' business behavior.',
              practicalExample: 'A daughter entering the firm respects the family\'s rituals (tradition) and feels a deep moral commitment (loyalty) to safeguard the family name.',
              keyTakeaway: 'Family Orientation provides the psychological and behavioral foundation that distinguishes family business leaders.'
            },
            keyTerms: ['Family Orientation (FO)', 'Bowen Systems Theory', 'Tradition', 'Stability', 'Loyalty', 'Trust', 'Interdependency'],
            textbookDefinitions: [
              {
                term: 'Family Orientation (FO)',
                definition: 'A multi-dimensional construct (tradition, stability, loyalty, trust, interdependency) explaining how individuals relate to and behave within the family system.',
                sourceAuthor: 'Lumpkin, Martin, & Vaughn (2008)'
              }
            ],
            summaryPoints: [
              'FO is rooted in Bowen\'s Family Systems Theory and Contextual Family Therapy.',
              'Consists of 5 dimensions: Tradition, Stability, Loyalty, Trust, Interdependency.',
              'Loyalty is the central binding force, as demonstrated by the Rothschild dynasty.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u5-1',
            prompt: 'Explain the five dimensions of the Family Orientation (FO) construct developed by Lumpkin, Martin, and Vaughn (2008), and distinguish between family rituals and routines under the tradition dimension.',
            sourceLabel: 'ENT 308 TMA Checkpoint 5',
            sourceReference: 'ENT 308 Module 2, Unit 1, Pages 26-31',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 5:
1. Theoretical Foundation: Lumpkin, Martin & Vaughn (2008) based FO on Bowen's Family Systems Theory and Contextual Family Therapy.
2. Five Dimensions:
   - Tradition: Recognition of shared history, legacy, roles, rituals, and routines.
   - Stability: Sense of permanence, homeostasis (balance), boundary rules, and resistance to disruptive change.
   - Loyalty: Central binding force involving duty, commitment, and priority on togetherness.
   - Trust: Psychological state accepting vulnerability based on positive expectations, fairness, and safety (Rousseau et al., 1998).
   - Interdependency: Mutual reliance, cohesion, and emotional closeness where members support each other without formal solicitation.
3. Rituals vs. Routines:
   - Rituals: Connected with emotions and attitudes, communicated across generations (e.g., family celebrations, holidays, birthdays).
   - Routines: Less emotional; perfunctory daily procedures carried out on a day-to-day operational basis.`,
            keyRubricPoints: [
              'Cites Lumpkin, Martin & Vaughn (2008) and Bowen Family Systems Theory',
              'Defines all 5 dimensions: Tradition, Stability, Loyalty, Trust, Interdependency',
              'Distinguishes rituals (emotionally connected, transgenerational, celebrations) from routines (perfunctory daily tasks)',
              'Notes stability involves homeostasis and predictable interaction patterns',
              'Explains loyalty as the central binding force'
            ]
          }
        ]
      },
      {
        id: 'unit-ent308-6',
        title: 'Unit 2: Defining the Family Business by Type of Family Involvement and Models',
        unitNumber: 2,
        sourceChapter: 'Module 2, Unit 2',
        pageRange: 'Pages 33-53',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-6-1',
            title: '6.1 The Two-Circle and Three-Circle Models',
            order: 1,
            sourceReference: 'ENT 308, Module 2, Unit 2, Pages 33-36',
            content: `Early family business scholars initially used the Dual Circle Model (Family and Business as two overlapping subsystems). However, it failed to differentiate between owners and non-owning employees.

The Three-Circle Model (Gersick, Davis, Hampton & Lansberg, 1997; based on Tagiuri & Davis, 1980):
Presents the family firm as three independent but overlapping subsystems:
1. Family
2. Business
3. Ownership

These overlapping circles form SEVEN distinct sectors:
- Sector 1: Family members only (not owners, not employees).
- Sector 2: Owners only (external investors, not family, not employees).
- Sector 3: Employees only (non-family staff, non-owners).
- Sector 4: Family members who are Owners, but not employees.
- Sector 5: Owners who are Employees, but not family members.
- Sector 6: Family members who are Employees, but not owners.
- Sector 7: The central core — Individuals who are Family Members, Owners/Shareholders, AND Employees.

The Three-Circle Model clarifies role confusion, conflicting goals, and boundary overlaps that cause tension during decision-making and succession.`,
            simplifiedExplanation: {
              analogy: 'Imagine three overlapping spotlight circles on a stage: Family, Ownership, and Management. An uncle who owns shares but doesn\'t work in the company stands in a different spotlight than a son who works as a manager without shares.',
              coreConcept: 'The 3-Circle Model categorizes every individual in a family firm into one of 7 sectors based on their combination of family membership, ownership, and employment.',
              practicalExample: 'Sector 7 represents the owner-manager who is also a blood family member (e.g., the founder CEO).',
              keyTakeaway: 'Tagiuri & Davis (1980) and Gersick et al. (1997) resolved organizational ambiguity by segregating ownership from general family membership.'
            },
            keyTerms: ['Dual Circle Model', 'Three-Circle Model', 'Gersick et al. (1997)', 'Tagiuri & Davis (1980)', '7 Sectors'],
            textbookDefinitions: [
              {
                term: 'Three-Circle Model',
                definition: 'A framework conceptualizing family business as three overlapping subsystems (Family, Ownership, Business) generating seven distinct stakeholder sectors.',
                sourceAuthor: 'Gersick, Davis, Hampton, & Lansberg (1997)'
              }
            ],
            summaryPoints: [
              'Dual circle model lacked distinction between ownership and management.',
              'Gersick et al. (1997) established the Three-Circle Model creating 7 sectors.',
              'Sector 7 contains individuals who hold all three roles: family member, owner, and employee.'
            ]
          },
          {
            id: 'top-ent308-6-2',
            title: '6.2 The Familiness Construct and Its Antecedents',
            order: 2,
            sourceReference: 'ENT 308, Module 2, Unit 2, Pages 37-40',
            content: `The concept of 'Familiness' was first introduced by Habbershon and Williams (1999).
Definition: "The idiosyncratic firm level bundle of resources and capabilities resulting from the interactions among three systems – the family, family members, and the business."

Pearson, Carr and Shaw (2008) used Social Capital Theory to identify four antecedent conditions that precede the occurrence of familiness (Table 4):
1. Time: Family structure promotes longevity in terms of values, culture, and vision. Relationships are longstanding.
2. Closure: Early involvement of children, continued involvement of founding generation, and keeping ownership/management among blood relatives.
3. Interdependence: Social structure provides a higher level of interdependence and collective action than non-family firms.
4. Interaction: Family members interact even outside business hours, building strong social capital, mutual understanding, and informal communication.

Zellweger, Eddleston and Kellermanns (2010) added the 'Organizational Identity Dimension' — examining the degree to which both family and non-family employees perceive and identify the company as a family business.`,
            simplifiedExplanation: {
              analogy: 'Familiness is the "secret sauce" of a family enterprise — the unspoken trust, Sunday dinner brainstorming, and shared blood ties that competitors cannot buy or replicate.',
              coreConcept: 'Familiness is the unique bundle of competitive advantages generated by the tight interplay between family relationships and business capabilities.',
              practicalExample: 'When an unexpected market crisis occurs, family leaders make instant decisions over a family dinner without waiting for bureaucratic committee approvals.',
              keyTakeaway: 'Familiness represents the intangible social capital that gives family businesses an inimitable competitive edge (Habbershon & Williams, 1999).'
            },
            keyTerms: ['Familiness', 'Habbershon & Williams (1999)', 'Pearson et al. (2008)', 'Time, Closure, Interdependence, Interaction', 'Zellweger et al. (2010)'],
            textbookDefinitions: [
              {
                term: 'Familiness',
                definition: 'The idiosyncratic firm-level bundle of resources and capabilities resulting from the interactions among the family, its individual members, and the business.',
                sourceAuthor: 'Habbershon & Williams (1999)'
              }
            ],
            summaryPoints: [
              'Habbershon and Williams (1999) defined familiness as idiosyncratic resources and capabilities.',
              'Pearson et al. (2008) established 4 antecedents: Time, Closure, Interdependence, and Interaction.',
              'Zellweger et al. (2010) introduced the organizational identity dimension.'
            ]
          },
          {
            id: 'top-ent308-6-3',
            title: '6.3 Continuum Models: Bull\'s Eye, Westhead & Cowling, and F-PEC Scale',
            order: 3,
            sourceReference: 'ENT 308, Module 2, Unit 2, Pages 40-53',
            content: `1. The Bull's Eye Model (Shanker & Astrachan, 1996):
Categorizes family businesses into three concentric zones based on the degree of family involvement:
- Broad (Outer Ring): Minimal direct involvement. Family strategically controls direction and intends business to remain in family for succession.
- Middle Ring: Founder or descendant is directly involved in active management.
- Narrow (Bull's Eye Center): Multiple generations of family are directly involved simultaneously in ownership, management, and governance.

2. Westhead and Cowling (1998) Four Elements & Seven Definitions:
Identified 4 key criteria: Perception (CEO identifies firm as family business), Ownership (>50% voting shares), Management (family on management team), and Intergenerational Transfer (succession to 2nd+ generation).

3. The F-PEC Scale (Astrachan, Klein, & Smyrnios, 2002):
Measures family influence on a continuous scale along three dimensions:
- Power: Measured by family percentage shareholding, number of family members in management, and family seats on the board.
- Experience: Measured by which generation owns, manages, and sits on the board.
- Culture: Measured by the overlap between family values and business values, and family commitment to the firm.

4. Authoritative Course Definition (Chua, Chrisman, & Sharma, 1999):
A family business is a firm dominantly owned, managed, and governed/controlled by a family, with the intention to retain ownership and control across generations.`,
            simplifiedExplanation: {
              analogy: 'Rather than calling a company "100% family" or "0% family", the Bull\'s Eye and F-PEC scales act like a thermometer measuring exactly how hot the family influence is across ownership, management, and culture.',
              coreConcept: 'Family business involvement is a continuous spectrum evaluated through ownership voting control, board seats, generational tenure, and cultural alignment.',
              practicalExample: 'A firm where the 3rd generation owns shares, manages daily operations, and guides corporate culture sits in the narrow center of the Bull\'s Eye.',
              keyTakeaway: 'The F-PEC scale evaluates family influence across Power, Experience, and Culture (Astrachan et al., 2002).'
            },
            keyTerms: ['Bull\'s Eye Model', 'Shanker & Astrachan (1996)', 'Westhead & Cowling (1998)', 'F-PEC Scale', 'Power, Experience, Culture', 'Chua, Chrisman & Sharma (1999)'],
            textbookDefinitions: [
              {
                term: 'Family Business (Authoritative Definition)',
                definition: 'A firm that is dominantly owned, managed, governed/controlled by a family, with the intention to retain ownership and control of the business within the family across generations.',
                sourceAuthor: 'Chua, Chrisman, & Sharma (1999); NOUN ENT 308'
              },
              {
                term: 'F-PEC Scale',
                definition: 'A continuous measurement tool evaluating family influence across three dimensions: Power, Experience, and Culture.',
                sourceAuthor: 'Astrachan, Klein, & Smyrnios (2002)'
              }
            ],
            summaryPoints: [
              'Shanker & Astrachan\'s Bull\'s Eye Model defines Broad, Middle, and Narrow family involvement.',
              'Westhead & Cowling (1998) classify definitions by Perception, Ownership, Management, and Succession.',
              'Astrachan et al. (2002) developed the F-PEC scale measuring Power, Experience, and Culture.',
              'Chua, Chrisman & Sharma (1999) provide the core definition: dominant ownership/management with trans-generational intent.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u6-1',
            prompt: 'Explain the Three-Circle Model of family business developed by Gersick et al. (1997), describe the seven sectors created by the model, and define Sector 7.',
            sourceLabel: 'ENT 308 TMA Checkpoint 6',
            sourceReference: 'ENT 308 Module 2, Unit 2, Pages 34-36',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 2:
1. Concept: Gersick, Davis, Hampton, and Lansberg (1997), building on Tagiuri and Davis (1980), conceptualized the family firm as three independent but overlapping subsystems: Family, Ownership, and Business.
2. Seven Sectors:
   - Sector 1: Family members only (not owners, not employees).
   - Sector 2: Owners only (external shareholders, not family, not employees).
   - Sector 3: Employees only (non-family personnel without ownership).
   - Sector 4: Family members who are Owners, but not employees.
   - Sector 5: Owners who are Employees, but not family members.
   - Sector 6: Family members who are Employees, but not owners.
   - Sector 7: The central overlapping core where an individual is simultaneously a Family Member, an Owner/Shareholder, and an Employee.
3. Significance: The model clarifies boundary confusion, helps diagnose role conflict (e.g. compensation vs dividends), and guides succession planning.`,
            keyRubricPoints: [
              'Cites Gersick et al. (1997) and Tagiuri & Davis (1980)',
              'Names the 3 overlapping subsystems: Family, Ownership, Business',
              'Correctly enumerates and describes all 7 sectors',
              'Explicitly defines Sector 7 as individuals holding all three roles simultaneously',
              'Explains how the model resolves role ambiguity and conflicting priorities'
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 3: THEORIES AND ECONOMIC IMPORTANCE (Units 1 - 3)
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent308-3',
    title: 'Module 3: Theories Guiding Family Business & Economic Impact',
    order: 3,
    description: 'Systems Theory, Resource-Based View (RBV), Social Capital Theory, Agency Theory, Stewardship Theory, and World/National Economic Statistics.',
    units: [
      {
        id: 'unit-ent308-7',
        title: 'Unit 1: Theoretical Frameworks Guiding Family Business Research',
        unitNumber: 1,
        sourceChapter: 'Module 3, Unit 1',
        pageRange: 'Pages 54-57',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-7-1',
            title: '7.1 Systems Theory, RBV, and Social Capital Theory',
            order: 1,
            sourceReference: 'ENT 308, Module 3, Unit 1, Pages 54-56',
            content: `Five key theoretical frameworks explain family business distinctiveness:

1. The Systems Theory:
Presents the family firm as three overlapping, interacting, independent subsystems (Family, Management, Ownership). Assumptions:
- One subsystem cannot be understood separately from the entire system.
- True understanding occurs only when all three subsystems and their interactions are studied as one unified system.

2. The Resource-Based View (RBV) (Barney, 1991; Penrose, 1959):
RBV is the most widely used theory in family business research. A firm's resources must be:
- Valuable (improves efficiency and effectiveness)
- Rare / Unique (not widely held)
- Inimitable (cannot be easily copied)
- Non-substitutable (no strategic equivalent).
In family firms, intangible resources include family reputation, values, tacit knowledge (Miller et al., 2007), long-term orientation, and trust (Sundaramurthy, 2008).

3. Social Capital Theory (Woolcock & Narayan, 2000; Bowles & Gintis, 2002):
Defines social capital as resources embedded in social networks that facilitate collective action. In family firms, emotional closeness and generational networks yield superior access to information, suppliers, and customer loyalty.`,
            simplifiedExplanation: {
              analogy: 'RBV says your company’s competitive armor is made of four metals: Valuable, Rare, Inimitable, and Non-substitutable (VRIN). A family\'s 50-year reputation is an inimitable asset no competitor can buy off the shelf.',
              coreConcept: 'The distinctiveness of family enterprises stems from internal unique resources (RBV) and network trust (Social Capital) across interconnected subsystems (Systems Theory).',
              practicalExample: 'A family winery uses hundred-year-old secret fermentation techniques passed from father to son (tacit knowledge under RBV).',
              keyTakeaway: 'RBV and Social Capital Theory show that family values and networks create sustainable competitive advantage.'
            },
            keyTerms: ['Systems Theory', 'Resource-Based View (RBV)', 'Barney (1991)', 'VRIN Criteria', 'Social Capital Theory'],
            textbookDefinitions: [
              {
                term: 'Resource-Based View (RBV)',
                definition: 'A strategic framework postulating that a firm achieves sustainable competitive advantage when its internal resources are valuable, rare, inimitable, and non-substitutable.',
                sourceAuthor: 'Barney (1991)'
              }
            ],
            summaryPoints: [
              'Systems Theory treats family, ownership, and management as interconnected subsystems.',
              'RBV requires resources to be valuable, rare, inimitable, and non-substitutable (Barney, 1991).',
              'Social Capital Theory examines relational trust and collective action networks.'
            ]
          },
          {
            id: 'top-ent308-7-2',
            title: '7.2 Agency Theory Versus Stewardship Theory',
            order: 2,
            sourceReference: 'ENT 308, Module 3, Unit 1, Pages 56-57',
            content: `4. Agency Theory (Jensen & Meckling, 1976):
Argues that principals (owners) and agents (managers) have divergent interests, creating agency costs (monitoring, bonding, residual loss).
- When family ownership hires an external manager: concentrated ownership enables tight monitoring, reducing agent opportunism, but monitoring costs may increase.
- When family ownership and family manager are combined: agency costs decrease significantly because there is zero separation between ownership and control; the manager acts as both principal and agent.
- Agency perspective assumes agents are self-serving, extrinsically motivated, and control-oriented.

5. Stewardship Theory (Donaldson & Davis, 1991):
Viewed in sharp contrast to agency theory.
- Assumes managers are naturally self-motivated stewards who view the firm as an extension of themselves.
- Driven by intrinsic motivation, self-actualization, achievement, commitment, trust, and long-term organizational health.
- Founding families see the survival of the business as inextricably linked to their personal identity and family welfare.`,
            simplifiedExplanation: {
              analogy: 'Agency theory views a hired manager like a mercenary who might slack off unless watched by cameras. Stewardship theory views a family leader like a loving gardener who weeds the garden out of pure devotion, needing no supervisor.',
              coreConcept: 'Agency theory focuses on preventing opportunistic divergence through monitoring; Stewardship theory highlights intrinsic dedication to collective prosperity.',
              practicalExample: 'A founder\'s daughter works 70 hours a week during a company crisis because she views the firm\'s success as her personal pride, not just a paycheck.',
              keyTakeaway: 'Family business leadership embodies Stewardship Theory through intrinsic commitment, long-term focus, and reduced agency costs.'
            },
            keyTerms: ['Agency Theory', 'Jensen & Meckling (1976)', 'Stewardship Theory', 'Donaldson & Davis (1991)', 'Extrinsic vs Intrinsic Motivation'],
            textbookDefinitions: [
              {
                term: 'Agency Cost',
                definition: 'The internal costs incurred by principals to monitor, align, and govern agents when ownership is separated from operational management.',
                sourceAuthor: 'Jensen & Meckling (1976)'
              },
              {
                term: 'Stewardship Theory',
                definition: 'An organizational perspective holding that managers are intrinsically motivated stewards whose personal goals align naturally with firm longevity and collective welfare.',
                sourceAuthor: 'Donaldson & Davis (1991)'
              }
            ],
            summaryPoints: [
              'Agency Theory (Jensen & Meckling, 1976) assumes self-serving behavior requiring monitoring.',
              'When family members manage the firm, traditional owner-manager agency costs are eliminated.',
              'Stewardship Theory (Donaldson & Davis, 1991) models leaders as intrinsically motivated stewards.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u7-1',
            prompt: 'Compare and contrast Agency Theory and Stewardship Theory in explaining managerial behavior within a family-owned business.',
            sourceLabel: 'ENT 308 TMA Checkpoint 7',
            sourceReference: 'ENT 308 Module 3, Unit 1, Pages 56-57',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 1:
1. Agency Theory (Jensen & Meckling, 1976):
   - Premise: Natural divergence of interest between owners (principals) and managers (agents).
   - Assumptions: Agents are self-serving, individualistic, extrinsically motivated by financial rewards, and require formal monitoring and control.
   - Family Context: If owners hire external managers, monitoring costs are incurred. If family members manage the business, traditional agency costs drop significantly because ownership and control coincide.
2. Stewardship Theory (Donaldson & Davis, 1991):
   - Premise: Managers act as dedicated stewards whose interests are naturally aligned with the firm's prosperity.
   - Assumptions: Stewards are intrinsically motivated by self-actualization, achievement, organizational commitment, and personal identification with the company.
   - Family Context: Family members view the business as an extension of the family's legacy and well-being, driving high personal sacrifice and long-term stewardship without the need for coercive monitoring.`,
            keyRubricPoints: [
              'Cites Jensen & Meckling (1976) for Agency Theory and Donaldson & Davis (1991) for Stewardship Theory',
              'Contrasts extrinsic motivation/self-serving agent with intrinsic motivation/steward behavior',
              'Explains how alignment of ownership and management reduces traditional agency costs',
              'Explains family firm leaders viewing the company as an extension of personal and family legacy',
              'Draws clear distinctions between monitoring mechanisms and mutual trust'
            ]
          }
        ]
      },
      {
        id: 'unit-ent308-8',
        title: 'Unit 2: Prevalence and Global Economic Contributions of Family Firms',
        unitNumber: 2,
        sourceChapter: 'Module 4 (Economic Importance)',
        pageRange: 'Pages 58-61',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-8-1',
            title: '8.1 Worldwide and Regional Statistics on Family Enterprise',
            order: 1,
            sourceReference: 'ENT 308, Module 4, Pages 58-61',
            content: `Family businesses are the primary engine of wealth, employment, and economic growth globally:

World Statistics (Family Firm Institute / FFI, 2016):
- Family firms account for 80-90% of all businesses worldwide (or 2/3 of all global business entities).
- Generate between 75% and 90% of global Gross Domestic Product (GDP).
- Employ between 50% and 80% of the world's working population.
- 85% of start-ups globally are established with family money.

Country Specific Figures:
- United States (Poza, 2007): Generates 60% of GDP; employs 80% of the workforce; creates 85% of all new jobs; accounts for 90% of incorporated businesses; over 1/3 of Fortune 500 companies are family controlled.
- United Kingdom (IFB Report, 2015): 4.6 million family firms (87% of private sector firms); employed 11.9 million people (47% of private sector employment); generated £1.3 trillion in turnover and £418 billion gross value to GDP; paid £125 billion in taxes (2014).
- China: 85.4% of private enterprises are family-owned.
- India: Provides 2/3 of national GDP; accounts for 90% of gross industrial output; generates 79% of organized private sector employment.
- Europe Share of Private Ownership: Germany (95%), France (95%), Italy (93%), Switzerland (88%), Finland (86%), Austria (80%), Sweden (80%), Spain (75%), Belgium (70%), Netherlands (69%).
- Centenarian Firms (Yiu, 2017): Japan has 25,321 family businesses over 100 years old; USA has 11,273; Germany has 7,632.`,
            simplifiedExplanation: {
              analogy: 'If all family businesses in the world stopped operating tomorrow, 80% of global jobs and nearly 90% of global economic output would instantly vanish.',
              coreConcept: 'Family businesses are not a fringe commercial novelty; they represent the overwhelming statistical majority of private employment, enterprise formation, and GDP generation across the globe.',
              practicalExample: 'In the UK alone, family firms paid £125 billion in tax in 2014, funding public hospitals, schools, and roads.',
              keyTakeaway: 'Family firms generate up to 90% of global GDP and 80% of global employment.'
            },
            keyTerms: ['FFI Global Data (2016)', '75-90% Global GDP', '50-80% Global Employment', 'Poza (2007)', 'Yiu (2017) Centenarian Firms'],
            textbookDefinitions: [
              {
                term: 'Economic Preponderance of Family Firms',
                definition: 'The statistical reality that family enterprises constitute 80-90% of global business entities and generate the majority of worldwide GDP and employment.',
                sourceAuthor: 'Family Firm Institute (2016); Poza (2007)'
              }
            ],
            summaryPoints: [
              'FFI (2016): Family firms comprise 80-90% of global businesses and 75-90% of world GDP.',
              'In the US, family firms generate 60% of GDP and 85% of all new jobs (Poza, 2007).',
              'In India, family businesses provide two-thirds of GDP and 90% of gross industrial output.',
              'Japan leads the world with 25,321 businesses surviving over a century (Yiu, 2017).'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u8-1',
            prompt: 'Summarize the global economic contributions of family businesses as reported by the Family Firm Institute (2016), and state the specific statistics for the United States, the United Kingdom, and India.',
            sourceLabel: 'ENT 308 TMA Checkpoint 8',
            sourceReference: 'ENT 308 Module 4, Pages 58-61',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 8:
1. Global FFI (2016) Statistics:
   - 80-90% of all businesses worldwide are family firms (two-thirds of all businesses).
   - Generate 75% to 90% of global Gross Domestic Product (GDP).
   - Employ 50% to 80% of the world's working population.
   - 85% of start-ups globally are funded with family capital.
2. United States (Poza, 2007):
   - Generates ~60% of GDP.
   - Employs ~80% of the private workforce and creates 85% of all new jobs.
   - Over one-third of Fortune 500 companies are family-controlled.
3. United Kingdom (IFB Report, 2015):
   - Accounts for 4.6 million businesses (87% of private sector firms).
   - Employed 11.9 million people (47% of private sector employment).
   - Generated £1.3 trillion turnover and £418 billion in GDP value.
4. India:
   - Two-thirds of GDP is provided by family firms.
   - Accounts for 90% of gross industrial output and 79% of organized private employment.`,
            keyRubricPoints: [
              'Cites FFI (2016) global metrics: 80-90% businesses, 75-90% GDP, 50-80% employment',
              'Mentions 85% of startups globally created with family money',
              'States US metrics from Poza (2007): 60% GDP, 80% workforce, 85% new jobs',
              'States UK metrics: 4.6 million firms (87%), £1.3T turnover, 11.9M jobs',
              'States India metrics: two-thirds of GDP, 90% gross industrial output'
            ]
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE 4: SUCCESSION PLANNING AND CONFLICT MANAGEMENT (Units 1 - 2)
  // --------------------------------------------------------------------------
  {
    id: 'mod-ent308-4',
    title: 'Module 4: Succession Planning, Governance, and Conflict Management',
    order: 4,
    description: 'Succession features, 3 ineffective patterns, 7 common mistakes, 4 avoidance recommendations, triangulation, and corporate governance.',
    units: [
      {
        id: 'unit-ent308-9',
        title: 'Unit 1: Succession in Family Business: Patterns, Mistakes, and Avoidance',
        unitNumber: 1,
        sourceChapter: 'Module 8 (Succession Planning)',
        pageRange: 'Pages 94-103',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-9-1',
            title: '9.1 Common Features and Ineffective Patterns of Succession',
            order: 1,
            sourceReference: 'ENT 308, Module 8, Pages 94-96',
            content: `Succession is the generational transition of firm leadership and ownership from founder to successor. It involves personal, family, business, legal, financial, and taxation complexities (Voeller et al., 2000; Doud & Hausner, 2000).

Ward (1997) Four Common Features of Successful Succession:
1. The founder needs to be ready and enthusiastic about passing on the business.
2. The successor is instilled with positive attitudes toward business challenges by a mentor, is educated for the task, and is able to handle responsibility.
3. Trust exists between founder and successor.
4. Commitment to cooperation with the entire family (sharing decisions).

Three Patterns of Ineffective Succession (Foster, 2001):
1. Conservative: Although the parent has exited the business, the parental shadow remains, locking the firm and its strategies in the past.
2. Rebellious: The next generation launches an overreactive clean-slate approach, discarding traditions, legacies, and the core "secret to success".
3. Wavering: The next generation is paralyzed by indecisiveness, unable to adapt to market conditions or assume confident leadership.`,
            simplifiedExplanation: {
              analogy: 'Passing a family business is like an aerial trapeze act: the founder must let go at the right second, the successor must reach out with trained grip, and both must trust each other, or the company falls.',
              coreConcept: 'Succession fails when founders either refuse to relinquish control (conservative), successors destroy the core business model (rebellious), or heirs freeze in indecision (wavering).',
              practicalExample: 'A founder moves his desk to a back office but still secretly overrules his daughter\'s supplier contracts (conservative shadow pattern).',
              keyTakeaway: 'Ward\'s 4 features (readiness, mentor education, trust, family cooperation) guarantee smooth generational transfer.'
            },
            keyTerms: ['Ward (1997)', '4 Features of Succession', 'Foster (2001)', 'Conservative Pattern', 'Rebellious Pattern', 'Wavering Pattern'],
            textbookDefinitions: [
              {
                term: 'Succession',
                definition: 'The generational transition through which leadership, strategic vision, and ownership control of a firm are transferred from one generation to another.',
                sourceAuthor: 'Ward (1997); Foster (2001)'
              }
            ],
            summaryPoints: [
              'Ward (1997) names 4 features: founder readiness, successor education/mentorship, mutual trust, and family cooperation.',
              'Three ineffective patterns (Foster 2001): Conservative (parental shadow), Rebellious (clean-slate destruction), Wavering (indecision paralysis).'
            ]
          },
          {
            id: 'top-ent308-9-2',
            title: '9.2 The Seven Common Mistakes of Succession and How to Avoid Them',
            order: 2,
            sourceReference: 'ENT 308, Module 8, Pages 96-103',
            content: `Seven Common Mistakes of Succession:
1. Mistake 1: Failure to understand the differences between ownership, governance, and management.
2. Mistake 2: Considering succession as an obligation to the past rather than an opportunity for the future (forcing children against their vocation).
3. Mistake 3: Considering succession as an event rather than an ongoing multi-year developmental process.
4. Mistake 4: Failure to transmit entrepreneurial orientation (failing to foster innovation, risk-taking, and proactiveness in heirs).
5. Mistake 5: Lack of a sound dialectic between parents and children (inability to critique ideas constructively, resulting in either uncritical favoritism or permanent conflict).
6. Mistake 6: Considering patrimony of values as the sole solution (assuming pious values alone preserve a firm without adapting to new competitive realities).
7. Mistake 7: Choosing the wrong 'third actor' (failing to engage competent outside advisors, directors, or mentors to defuse emotional bias).

Four General Recommendations to Avoid Succession Mistakes:
1. Proper Concept of Ownership: Viewing ownership as a responsibility to all stakeholders, not an entitlement to raid corporate assets.
2. Culture of Merit: Rewarding competence rather than nepotism; finding suitable alternative careers for children who lack business acumen.
3. Education of the Young: Transferring values through living examples, open explanations, and codified family protocols.
4. Choice of Entrepreneurial Development Model: Fostering latent entrepreneurial spirit so successors can re-invent the business.

Characteristics of Successful Successors:
- Know the business thoroughly and love its nature.
- Know their own strengths/weaknesses through outside education and experience.
- Possess a desire to lead and serve.
- Guided by advisors, previous generations, and outside boards.
- Earned respect of non-family employees, suppliers, and customers.
- Respect the past while focusing energies on the future.`,
            simplifiedExplanation: {
              analogy: 'Succession is not a coronation event where a crown is handed over in one afternoon; it is a 10-year apprenticeship process of testing, education, and mutual respect.',
              coreConcept: 'Preventing succession failure requires replacing nepotism with a culture of merit, treating succession as an ongoing process, and maintaining an honest parent-child dialectic.',
              practicalExample: 'Instead of making an unqualified son CEO, the family places him on the board while appointing a competent external managing director, protecting the business.',
              keyTakeaway: 'A culture of merit and viewing succession as a long-term developmental process prevent catastrophic generational collapse.'
            },
            keyTerms: ['7 Mistakes of Succession', 'Culture of Merit', 'Succession as Process vs Event', 'Sound Dialectic', 'Third Actor', 'Characteristics of Successors'],
            textbookDefinitions: [
              {
                term: 'Culture of Merit',
                definition: 'An organizational norm where management roles and promotions are awarded strictly based on competence, evaluated achievements, and demonstrated qualification rather than birthright nepotism.',
                sourceAuthor: 'NOUN ENT 308 Course Guide'
              }
            ],
            summaryPoints: [
              'Succession is a multi-stage process, not a sudden event.',
              'Mistakes include forcing children, ignoring merit, and lacking an open parent-child dialectic.',
              'Avoidance requires a culture of merit, proper ownership concepts, young education, and competent third-party advisors.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u9-1',
            prompt: 'Identify the seven common mistakes of succession in family business, explain the three patterns of ineffective succession identified by Foster (2001), and discuss the importance of establishing a "culture of merit".',
            sourceLabel: 'ENT 308 TMA Checkpoint 9',
            sourceReference: 'ENT 308 Module 8, Pages 95-101',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 9:
1. Seven Common Mistakes:
   - Mistake 1: Confusing ownership, governance, and management roles.
   - Mistake 2: Treating succession as an obligation to the past rather than an opportunity for the future (forcing children against their true vocation).
   - Mistake 3: Treating succession as a single event rather than an ongoing developmental process.
   - Mistake 4: Failure to transmit entrepreneurial orientation (innovation, proactiveness, risk-taking).
   - Mistake 5: Lack of a sound dialectic between parents and children (preventing objective critique).
   - Mistake 6: Assuming patrimony of moral values alone guarantees business survival without market adaptation.
   - Mistake 7: Choosing the wrong "third actor" or failing to utilize neutral outside directors and mentors.
2. Three Patterns of Ineffective Succession (Foster, 2001):
   - Conservative: Parental shadow persists, freezing the firm in outdated past strategies.
   - Rebellious: Successors react aggressively by wiping out traditions and core competencies.
   - Wavering: Successors are paralyzed by indecision and fail to exercise leadership.
3. Culture of Merit: Essential to counteract toxic nepotism. Positions must be awarded based on targets, verified achievements, and objective competency. Children who lack suitability are guided toward alternative paths without being denied family shareholder rights.`,
            keyRubricPoints: [
              'Lists all 7 succession mistakes accurately',
              'Details Foster\'s (2001) 3 patterns: Conservative, Rebellious, Wavering',
              'Defines Culture of Merit as antidote to nepotism',
              'Emphasizes succession as an ongoing process rather than a single event',
              'Explains the role of a sound dialectic and objective third-party advisors'
            ]
          }
        ]
      },
      {
        id: 'unit-ent308-10',
        title: 'Unit 2: Managing Conflict and Triangulation in Family Firms',
        unitNumber: 2,
        sourceChapter: 'Module 9 (Conflict Management)',
        pageRange: 'Pages 86-90',
        isComplete: true,
        verificationStatus: 'verified_complete',
        topics: [
          {
            id: 'top-ent308-10-1',
            title: '10.1 Conflict Dynamics and Triangulation Pitfalls',
            order: 1,
            sourceReference: 'ENT 308, Module 9, Pages 86-89',
            content: `Conflict is a natural and necessary part of human relationships. Common sources in family firms include employment/exit policies, role definitions, compensation, dividends vs reinvestment, and perceived unfairness ("fair equals equal" dilemma).

Triangulation in Family Conflict:
Triangulation refers to a situation in which conflict between two family members is managed by either or both talking to a third party (acting as a sounding board) rather than addressing each other directly. While it provides short-term emotional release, chronic triangulation exacerbates conflict.

Five Unwanted Effects of Triangulating:
1. Third parties make decisions based on one-sided, biased information.
2. They are perceived as "sticking their nose where it doesn't belong".
3. They are viewed as biased and "playing favorites".
4. They absorb excessive stress from the conflict onto themselves.
5. They unintentionally siphoned off the impetus for the primary parties to talk directly and resolve the issue.

Guidelines for Managing Triangulation:
- Commit to "fight your own battles" by speaking directly to the person in conflict.
- Separate the need for a neutral sounding board from venting knee-jerk complaints.
- Recognize that sounding boards hear only one side of the story.
- If third-party intervention is necessary, engage an external professional counselor or mediator outside the family.`,
            simplifiedExplanation: {
              analogy: 'If brother A is upset with brother B, but complains to mother C to fight his battle, mother C gets trapped in the middle, brother B feels ambushed, and the underlying tension between A and B festers.',
              coreConcept: 'Triangulation temporarily relieves emotional pressure by involving a third party, but structurally prevents direct resolution and multiplies toxic family politics.',
              practicalExample: 'A family council establishes a rule: family members with business disputes must speak directly in facilitated meetings rather than lobbying parents.',
              keyTakeaway: 'Direct communication and neutral external mediation prevent the destructive five pitfalls of triangulation.'
            },
            keyTerms: ['Triangulation', '5 Unwanted Effects', 'Sounding Board Dilemma', 'Direct Communication', 'Family Council'],
            textbookDefinitions: [
              {
                term: 'Triangulation',
                definition: 'A dysfunctional relational dynamic where two conflicting family members route their communication through a third party rather than resolving differences directly.',
                sourceAuthor: 'NOUN ENT 308 Course Guide'
              }
            ],
            summaryPoints: [
              'Conflict arises over exit policies, role definition, and compensation equity.',
              'Triangulation occurs when two parties communicate via a third party.',
              'Produces 5 unwanted effects including bias, siphoning direct communication, and playing favorites.',
              'Remedy requires direct dialogue or external professional mediation.'
            ]
          }
        ],
        writtenQuestions: [
          {
            id: 'wq-ent308-u10-1',
            prompt: 'Define triangulation in the context of family business conflict, list the five unwanted effects of triangulating, and state the recommended guidelines for resolving it.',
            sourceLabel: 'ENT 308 TMA Checkpoint 10',
            sourceReference: 'ENT 308 Module 9, Pages 88-89',
            maxMarks: 10,
            expectedAnswerGuide: `Model Answer based on ENT 308 Unit 10:
1. Definition: Triangulation occurs when conflict between two family members is addressed by one or both parties communicating with a third party (acting as a sounding board) rather than confronting each other directly.
2. Five Unwanted Effects:
   - 1. Decisions are made that are one-sided due to biased selection of facts.
   - 2. The third party is perceived as sticking their nose where it doesn't belong.
   - 3. The third party is viewed as biased and playing favorites.
   - 4. The third party absorbs too much emotional stress upon themselves.
   - 5. It siphons off the motivation for the conflicting parties to speak directly and resolve the problem.
3. Recommended Guidelines:
   - Commit to speaking directly to the other party ("fight your own battles").
   - Differentiate constructive sounding boards from reflexive complaining.
   - Acknowledge that sounding boards only hear one perspective.
   - Utilize external, objective professional mediators or counselors when neutral assistance is needed.`,
            keyRubricPoints: [
              'Defines triangulation as indirect conflict routing through a third party',
              'Lists all 5 unwanted effects of triangulating',
              'Explains how triangulation siphons off impetus for direct confrontation',
              'States the guideline to speak directly ("fight your own battles")',
              'Recommends external professional advisors when mediation is required'
            ]
          }
        ]
      }
    ]
  }
];

export const ENT308_AUTHENTIC_COURSE: Course = {
  id: 'course-ent308-authoritative',
  code: 'ENT 308',
  title: 'Family Business and Succession Planning',
  department: 'Department of Entrepreneurial Studies, Faculty of Management Sciences',
  description: 'Authoritative study of family business dynamics, the Japanese longevity model, European & Nigerian dynasties, theoretical models (Systems, RBV, Social Capital, Agency, Stewardship), 3-Circle Model, Familiness, F-PEC scale, succession planning, conflict management, and corporate governance.',
  coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  documents: [
    {
      id: 'doc-ent308-pdf',
      name: 'ENT308.pdf',
      fileType: 'pdf',
      fileSize: 2800000,
      status: 'ready',
      uploadedAt: '2026-10-17T11:41:00.000Z',
      verifiedAuthentic: true,
      processingStatus: 'fully_processed',
      processingNotes: 'Fully extracted and verified: 10 Modules, complete unit sequence, authentic NOUN definitions, tables, and TMA examinations.',
      summary: 'National Open University of Nigeria official course textbook for ENT 308 by Dr. (Mrs) Bamidele Wale-Oshinowo and Prof. Emerole Gideon Ahamefula.'
    }
  ],
  modules: ENT308_MODULES
};

export const ENT308_PAST_QUESTIONS: PastExamQuestionItem[] = [
  {
    id: 'pq-ent308-2018-q1',
    courseId: 'course-ent308-authoritative',
    courseCode: 'ENT 308',
    courseTitle: 'Family Business and Succession Planning',
    linkedUnitId: 'unit-ent308-6',
    linkedUnitTitle: 'Unit 2: Defining Family Business & Three-Circle Model',
    year: '2018 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'ENT308.pdf',
    sourceReference: 'Module 2, Unit 2, Pages 34-36',
    questionNumber: '1',
    questionText: 'With the aid of a clearly labelled diagram, explain the Three-Circle Model of family business developed by Gersick et al. (1997). Describe the characteristics of individuals who occupy Sectors 4, 6, and 7.',
    questionType: 'written_process',
    modelAnswer: 'The Three-Circle Model incorporates Family, Ownership, and Business subsystems. Sector 4 contains family members who are owners but not employees. Sector 6 contains family members who are employees but not owners. Sector 7 is the central intersection containing individuals who are simultaneously family members, owners/shareholders, and active employees.',
    keyRubricPoints: [
      'Identifies Gersick et al. (1997) / Tagiuri & Davis (1980)',
      'Identifies the 3 subsystems: Family, Ownership, Business',
      'Accurately defines Sector 4 (Family + Owner, non-employee)',
      'Accurately defines Sector 6 (Family + Employee, non-owner)',
      'Accurately defines Sector 7 (Triple overlap: Family + Owner + Employee)'
    ],
    marks: 20,
    difficulty: 'Core',
    isPastQuestion: true,
    verifiedAuthentic: true
  },
  {
    id: 'pq-ent308-2019-q2',
    courseId: 'course-ent308-authoritative',
    courseCode: 'ENT 308',
    courseTitle: 'Family Business and Succession Planning',
    linkedUnitId: 'unit-ent308-9',
    linkedUnitTitle: 'Unit 1: Succession in Family Business',
    year: '2019 Examination',
    sourceType: 'uploaded_document',
    sourceFileName: 'ENT308.pdf',
    sourceReference: 'Module 8, Pages 96-101',
    questionNumber: '2',
    questionText: 'Discuss five common mistakes associated with leadership succession in family businesses and explain how establishing a "culture of merit" helps prevent generational failure.',
    questionType: 'written_process',
    modelAnswer: 'Five mistakes: (1) Confusing ownership, governance, and management; (2) Treating succession as an obligation to the past; (3) Treating succession as an event instead of a process; (4) Failure to transmit entrepreneurial orientation; (5) Lack of a sound dialectic between parents and children. A culture of merit counteracts nepotism by making competence, timely assessments, and objective achievement the prerequisites for leadership.',
    keyRubricPoints: [
      'Identifies at least 5 of the 7 succession mistakes from the textbook',
      'Distinguishes ownership vs governance vs management',
      'Explains succession as a multi-year developmental process',
      'Defines culture of merit as antidote to nepotism',
      'Notes objective assessment criteria for potential successors'
    ],
    marks: 20,
    difficulty: 'Core',
    isPastQuestion: true,
    verifiedAuthentic: true
  }
];
