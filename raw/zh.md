# MIS 期末考试知识点速查

---

## 01. Information Systems Overview

### IT vs IS

- **Information Technology (IT)**: all hardware and software a firm needs to achieve business objectives. Consists of: computing technology, networking (communication) technology, data management and analytics technology.
- **Information System (IS)**: a set of interrelated components that collect, process, store, and distribute information to support decision making, coordination, and control.
- **Data vs Information**: Data = streams of raw facts; Information = data shaped into meaningful form.

### Functions of an IS

Three basic activities: **Input → Processing → Output**. Feedback is output returned to appropriate people to evaluate and refine the input.

### MIS (广义/狭义)

- **Narrow sense**: IS that support middle-level management.
- **Broad sense**: systems built with IT that facilitate management excellence (MIS = IS). Also refers to the disciplinary field.

### Three Dimensions of IS

1. **Organization**: people, structure, business processes, politics, culture. Hierarchy: Senior → Middle → Operational management; Knowledge workers; Data workers; Production/service workers.
2. **Management**: managers set organizational strategy, act creatively, create new products/services, occasionally re-create the organization.
3. **Technology**: hardware/software, data management, networking/telecom. IT infrastructure = platform the system is built on.

### Six Strategic Business Objectives of IS

1. Operational excellence
2. New products, services, and business models
3. Customer and supplier intimacy
4. Improved decision making
5. Competitive advantage
6. Survival

### Business Perspective on IS

- Investing in IT alone does NOT guarantee good returns.
- Need: right business model + complementary assets (organizational and management capital).
- Organization and management dimensions are as important as technology.

### Digital Firm (数字化转型)

Fully digital firm: significant business relationships digitally enabled/mediated; core business processes through digital networks; key corporate assets managed digitally; greater flexibility (time shifting, space shifting).

### Organization: Technical vs Behavioral Views

- **Technical definition**: formal social structure that processes resources from environment to produce outputs (inputs → production → outputs → feedback loop).
- **Behavioral definition**: a collection of rights, privileges, obligations, and responsibilities balanced over time through conflict and conflict resolution.
- Building IS involves more than technical rearrangement — it changes organizational balance.

### Features of Organizations

- Goals (Strategy)
- Organizational Structure
- Business Processes
- Organizational Politics
- Organizational Culture
- Organizational Environments

### Porter's Five Competitive Forces

1. Traditional competitors
2. New market entrants
3. Substitute products and services
4. Customers
5. Suppliers

### Four Competitive Strategies

1. **Low-cost leadership**: produce at lower price than competitors (Walmart, Xiaomi, MXBC)
2. **Product differentiation**: enable new products/services; mass customization (Google, Apple, DJI)
3. **Focus on market niche**: specialize in single market niche (Transsion, Fuyao, Pop Mart)
4. **Strengthen customer and supplier intimacy**: develop loyalty, increase switching costs (Toyota, Amazon, SHEIN)

### Business Value Chain Model

Firm as series of activities that add value to products/services.
- **Primary activities** vs **Support activities**
- At each stage, determine how IS can improve competitive strategy.
- Utilize benchmarking, industry best practices.

### Organizational Structures (Mintzberg)

| Type | Description | Examples |
|:---|:---|:---|
| Entrepreneurial (创业型) | Young, small firm, fast-changing environment, simple structure | Small start-up |
| Machine bureaucracy (职能式层级) | Large bureaucracy, slowly changing environment, centralized management | Midsize manufacturing |
| Divisionalized bureaucracy (事业部式) | Multiple machine bureaucracies, different products, central HQ | Large diversified firms |
| Professional bureaucracy (专业式) | Knowledge-based, expertise of professionals, weak central authority | Law firms, hospitals |
| Adhocracy (民主式) | Task force, rapidly changing environment, multidisciplinary teams, weak central management | Consulting firms |

### Business Processes

- Flows of material, information, knowledge; sets of activities/steps.
- May be tied to functional area or be cross-functional.
- **Organizations = Organizational Structures + Business Processes** (类比：程序 = 数据结构 + 算法)

### Organizational Impacts of IS

- **Goals**: IS may support/enable goals and strategy
- **Structure**: IS may reinforce or enable more efficient structure
- **Business Processes**: increase efficiency or enable entirely new processes
- **Politics**: changes and conflicts
- **Culture**: changes and conflicts
- **Environments**: sense and respond

### Types of Information Systems (by Management Level)

- **Senior Management**: Executive Support Systems (ESS)
- **Middle Management**: Management Information Systems (MIS), Decision Support Systems (DSS)
- **Operational Management**: Transaction Processing Systems (TPS)

### TPS (Transaction Processing Systems)

- Serve operational managers; perform/record daily routine transactions.
- Examples: sales order entry, payroll, shipping.
- Serve predefined, structured goals and decision making.

### MIS (Management Information Systems, 狭义)

- Serve middle management; provide reports on firm's current performance based on TPS data.
- Answer routine questions with predefined procedure; typically have little analytic capability.

### DSS (Decision Support Systems)

- Serve middle management; support nonroutine decision making.
- May use external information as well as TPS/MIS data.

### ESS (Executive Support Systems)

- Support senior management; address nonroutine decisions requiring judgment, evaluation, insight.
- Incorporate external events + summarized internal MIS/DSS data.
- Example: digital dashboard with real-time view of financial performance.

### Enterprise Applications (四大企业应用)

1. Enterprise systems (ERP)
2. Supply chain management systems (SCM)
3. Customer relationship management systems (CRM)
4. Knowledge management systems (KMS)

### E-Business / E-Commerce / E-Government

- **E-business**: use of digital technology and Internet to drive major business processes
- **E-commerce**: subset of e-business; buying and selling goods/services through Internet
- **E-government**: using Internet technology to deliver information and services to citizens, employees, businesses

---

## 02. IT Infrastructure in Business Contexts

### Services Provided by IT Infrastructure

Main: Computing, Telecommunications (Networking), Data management, AI services.

### Technology Drivers of Infrastructure Evolution

- **Moore's Law**: computing power doubles every 2 years
- **Law of Mass Digital Storage**: amount of data stored each year doubles
- **Metcalfe's Law**: value/power of a network grows exponentially with number of members
- **Declining communication costs** and Internet growth
- **Standards and network effects**: specifications that establish product compatibility

### Trends in Computer Platforms

Mobile Computing, Consumerization of IT, Quantum Computing, Virtualization, Cloud Computing, Green Computing, GPU Computing, Linux/open source, Software for the Web, Web services/SOA, Software outsourcing/cloud services, AI-empowered software.

### Key Digital Networking Technologies

- **Client/server computing** (客户机/服务器计算)
- **Packet switching** (分组交换)
- **TCP/IP Architecture** (互联网体系架构)
- **Convergence**: telephone + computer networks → unified digital network
- **IoT** (物联网): sensors and connected devices
- **De-centralized networks**: peer-to-peer, agent-to-agent

### IT Governance

Who controls IT infrastructure? How is IT department organized? How are costs allocated? Tools: TCO model, competitive forces model. Rent-versus-buy. Insourcing/outsourcing/cloud.

### Database Management Systems (DBMS)

- **Database**: collection of data organized to serve many applications efficiently by centralizing data and controlling redundancy.
- **DBMS**: software that centralizes data, manages them efficiently, and provides access by application programs.
- Data represented as two-dimensional tables (rows = records/tuples, columns = fields/attributes).
- **Primary key**: field that uniquely identifies each record.
- **Foreign key**: primary key used in second table as look-up field.

### Emerging Database Forms

- **NoSQL**: more flexible data model, data distributed across machines, easier to scale, handles large volumes of unstructured/structured data.
- **Vector databases** (向量数据库): stores unstructured data as high-dimensional numerical arrays (embeddings) generated by neural networks; executes semantic similarity search; functions as "long-term memory" for Generative AI, powering RAG architectures.
- **Databases in the cloud**: better respond to real-time demand, keep costs low.

### Databases and the Web

Multi-tier Server configuration: Web server → Application server/middleware → Database server (DBMS). Advantages: ease of browser use, few/no changes to database, inexpensive to add web interface.

### Data Warehouse

Stores current and historical data from many core operational transaction systems. Consolidates and standardizes information; data cannot be altered. Provides analysis and reporting tools. Features: subject-oriented, multiple dimensions, information summaries and aggregations.

### Analytical Tools

- **OLAP** (Online Analytical Processing): multidimensional data analysis; Data Cube operations: Slice (切片), Dice (切块), Pivot (旋转), Drill down (下钻), Roll up (上卷).
- **Data Mining**: finds hidden patterns/relationships. Types: Associations (关联), Sequences (序列), Classification (分类), Clustering (聚类), Forecasting (预测).
- **Text mining**: extracts key elements from large unstructured data sets; sentiment analysis.
- **Web mining**: content mining, structure mining, usage mining.

### Classification & Clustering (典型技术)

- Classification: Decision trees, Neural networks, Support vector machines, Random forests.
- Clustering: Partial clustering (K-means), Density-based clustering, Hierarchical clustering.
- Association: Apriori Algorithm based on "confidence" (置信度) and "support" (支持度).

### LLM in Business Contexts (四种方法)

1. **Connect to general LLM** — Key: prompt engineering (提示词工程)
2. **Customized LLM** — Key: fine-tuning (微调)
3. **Local knowledge + LLM** — Key: RAG (检索增强生成)
4. **Automatic services** — Key: Contextualized AI agents

### Data Policy & Data Administration

- **Information policy**: specifies rules for sharing, disseminating, acquiring, standardizing, classifying, inventorying information.
- **Data administration**: management group establishing policies/procedures to manage data.
- **Data governance**: organizational structure for managing availability, usability, integrity, security of data.
- **Database administration**: management group creating and maintaining databases.

### Security Threats

- **Malware types**: Virus (病毒), Worms (蠕虫), Trojan horse (特洛伊木马), Ransomware (勒索软件), Spyware (间谍软件), Keyloggers (按键窃听器), Code injection (代码注入, e.g., SQL injection, prompt injection).
- **Hacker attacks**: System intrusion, Spoofing (欺诈), Sniffing (嗅探), DoS/DDoS (拒绝服务攻击), Identity theft (身份窃取), Click Fraud (点击欺骗).

### Security Tools

- **Identity Management & Authentication**: Passwords, Tokens, Smart cards, Biometric authentication, Two-factor authentication.
- **Firewalls** (防火墙): combination of hardware/software preventing unauthorized access.
- **Intrusion Detection Systems** (入侵检测系统)
- **Antivirus Software**
- **Encryption**: Symmetric key (single shared key) vs Asymmetric/Public key (two keys: public + private). Digital certificate, Certification Authority (CA), Public Key Infrastructure (PKI).
- **High-availability Systems**: Redundancy (冗余, no single-failure point) and Backup (备份).

### Organizational Framework for Security

- **Controls** (控制/内控): General controls (govern design, security, data files) and Application controls (input, processing, output controls).
- **Security policy** (安全策略): ranking risks, identifying goals, identifying mechanisms. Acceptable Use Policy (AUP).
- **Auditing** (信息系统审计): review technologies, procedures, documentation, training, personnel; list and rank control weaknesses.
- **Disaster Recovery Planning** (灾难恢复计划): plans for restoration; Backup and restore.
- **Business Continuity Planning** (商务连续性计划): continuous operation under predefined circumstances; Redundancy and failover.

### Cloud Computing Security Issues

- Responsibility resides with company owning data.
- Firms must ensure: where data stored, meeting legal privacy laws, segregation from other clients, audits/certifications, SLAs.

---

## 03. Enterprise Applications

### ERP Evolution: ROP → MRP → MRPII → ERP

- **ROP** (Reorder Point, 订货点法): early inventory management (1940s).
- **MRP** (Material Requirement Planning): production planning, scheduling, inventory control. Three objectives: Material (ensure availability), Requirement (maintain lowest levels), Plan (plan manufacturing, delivery, purchasing). Based on BOM (Bill of Materials). Limitations: only materials, no capacity constraints, no cost info, poor data integrity.
- **MRPII** (Manufacturing Resource Planning): extends to all production resources — Money, Manpower, Materials, production capacity. Includes financial planning and "what-if" simulation.
- **ERP** (Enterprise Resource Planning): suite of integrated applications covering Product planning, Manufacturing, Marketing/sales, Inventory, Shipping/payment. Suite of integrated software modules + common central database. Information entered in one process immediately available for other processes.

### ERP Characteristics

- **Integration**: functional areas are integrated
- **Centralization**: databases are centralized

### ERP Implementation

- Built around thousands of predefined business processes reflecting **best practices** (最佳实践).
- Firms: select functions → conduct **business process re-engineering** (BPR, 业务流程重组) → map business processes to software → use configuration tables for customizing.
- **Challenges**: conflicts with business strategy, huge investments, conflicts with organizational culture/politics (organizational resistance), loss of flexibility.
- **Key Success Factors**: organization prepared for change, seen as business imperative, executive leaders active/visible in support, adequate resources, good packaged system, user training, stress the enterprise not the system, general manager as mediator.

### Major ERP Vendors

SAP, Oracle, Microsoft, Sage/Epicor/Infor, Odoo (opensource), Yonyou (用友), Kingdee (金蝶).

### Supply Chain

- Network of organizations and processes for procuring materials, transforming into products, distributing products.
- **Upstream**: suppliers, suppliers' suppliers.
- **Downstream**: delivering products to customers.
- **Internal supply chain**.

### Supply Chain Efficiency

- **Just-in-time** (准时制): components arrive as needed, finished goods shipped after assembly. Requires perfect information.
- **Safety stock**: buffer for lack of flexibility.
- **Bullwhip effect** (牛鞭效应): information about product demand gets distorted as it passes from one entity to next across supply chain.
- **Causes**: uncertain customer orders, delayed replenishment, order batching, price fluctuations, rationing/shortage gaming.
- **Fundamental problems**: Delay, No collaboration, No information sharing, Poor forecast.

### Vendor Managed Inventory (VMI)

Supplier manages inventory for the buyer. Example: P&G-Walmart collaboration — P&G monitors Walmart's inventory, auto-replenishes, both reduce costs.

### Push vs Pull Strategy

- **Push**: work release based on downstream demand forecasts; "sell what we make" (efficiency). Problem: forecast uncertainty.
- **Pull**: work release based on actual demand; "make what we sell" (responsiveness). Problem: delayed information.
- **Push-Pull Hybrid**: early stages push (aggregated forecasts), final production pull (actual demand). Trade-off via **Decoupling Points (DP)**.
- **Functional products**: stable, predictable demand, long life cycles, low margins → efficiency focus.
- **Innovative products**: unpredictable demand, short life cycles, high variety → responsiveness focus.

### SCM Systems

- **Supply chain planning systems**: model supply chain, demand planning, optimize sourcing/manufacturing, establish inventory levels.
- **Supply chain execution systems**: manage flow through distribution centers/warehouses.

### CRM (Customer Relationship Management)

Integrated system for identifying, acquiring, maintaining customers; supporting marketing, sales, and service.

Three functional types:
- **Operational CRM**: customer-facing applications (SFA, call center, marketing automation).
- **Analytical CRM**: based on data warehouses; analyzes customer data (OLAP, data mining); Customer Lifetime Value (CLTV).
- **Collaborative CRM**: collects, organizes, shares customer data across teams; unified messaging; interaction/channel/document management.

### CRM Trends

Social media for inbound marketing, Cloud/SaaS CRM (Salesforce), Mobile/IoT data, Integration with ERP/SCM (Total Life Cycle Immersive Marketing).

### CRM Paradox

"Dark side of CRM" — differential treatment of customers may cause perceptions of unfairness (e.g., Amazon dynamic pricing).

---

## 04. e-Commerce, Knowledge Management, and Decision Making

### Why e-Commerce is Different (Digital Markets Features)

- **Ubiquity**: marketspace is virtual, transaction costs reduced
- **Global reach**: transactions cross cultural/national boundaries
- **Universal standards**: Internet standards
- **Richness**: video, audio, text messages
- **Interactivity**: information density, price/cost transparency, price discrimination
- **Personalization/customization**: technology permits modification of messages/goods
- **Social technology**: user content generation, social networking

### Digital Markets Are Different

- **Disintermediation** (去中介化): removing intermediary layers lowers final cost.
- **Two-sided Markets** (双边市场): technology enables new forms of connecting different users to create value (Google, Facebook, Taobao, Uber, AirBnB...).

### Digital Goods

Three categories: (1) Information products (e-books, news, music...), (2) Symbols and data records (tickets, financial instruments...), (3) Services (messaging, transactions, entertainment...).

Properties:
- Physical: Non-depletion (无损耗性), Variable (可变性), Replicable (可复制性)
- Economic: Individualized value (个性化价值偏好), Network externalities (网络外部性), Economy of scale (规模经济性)

### New Possibilities with Digital Goods

- **Personalization and Long-tail** (长尾): 80/20 rule vs long tail; information goods are variable, variable costs negligible, storage/delivery costs low, powerful search/recommendation.
- **Differential pricing** (区别定价): First degree (individual), Second degree (versioning, bulk discounts), Third degree (group pricing).
- **Bundling** (捆绑销售): complementarity, competition for markets, reshaping demand curve.
- **Subscription** (订阅): from discrete products to continuous access; lock-in effect, switching costs, maximizing CLV.

### e-Commerce Types

- B2C, B2B, C2C, Hybrid.
- Traditional (PC-Websites) vs Mobile commerce (Mobile-Apps).
- **Business models**: Portal, E-tailer, Content provider, Transaction broker, Market creator, Service provider, Community provider.
- **Revenue models**: Advertising, Sales, Subscription, Free/Freemium, Transaction fee, Affiliate.

### China Digital Platform Evolution

- Stage I (late 1990s-early 2000s): Four basic functional types developed in parallel
- Stage II (~2005-2015): Social media (fusion of communication + content) — Weibo, WeChat
- Stage III (~2015-now): Social commerce (fusion of social media + commerce) — WeChat commerce, live-streaming
- Stage IV (current): Fusion of social commerce + supply chain coordination

### Knowledge Management

- **Explicit Knowledge**: knowledge that has been documented (structured, semi-structured, unstructured).
- **Tacit Knowledge**: knowledge in minds of employees, not documented. Solutions: Communities of Practice (CoP), AI involvement.

### Major Types of Knowledge Management Systems

1. **Enterprise-wide KM**: ECM systems, digital asset management, collaboration tools (blogs, wikis). Key problem: developing taxonomy. Alternative: tagging, search engines.
2. **Knowledge Work Systems**: for researchers, designers, scientists, engineers. CAD, VR/AR, collaboration systems.
3. **Intelligent Techniques**: Expert systems (rule-based, fuzzy logic), Case-based reasoning, Machine learning (neural networks, genetic algorithms, LLMs), Intelligent agents.

### LLM in KM Challenges

- Hallucination (幻觉)
- Data Privacy and Security
- Dynamic Access Control
- Cost and Maintenance

### Types of Decisions

- **Structured**: repetitive/routine, definite procedure, can be automated → "High-Velocity Automated Decision Making"
- **Semistructured**: only part has clear-cut answer, IS may provide analysis support
- **Unstructured**: requires judgment/evaluation/insight, IS may provide analysis support

### Four Kinds of Decision Support Systems

- Operational/Middle: MIS, DSS
- Senior Management: ESS
- Group: GDSS (Group Decision Support Systems)

### BI and Analytics Capabilities

- Production reports, Parameterized reports, Dashboards/scorecards, Ad hoc query/search/report, Drill down/roll up, Forecasts/scenarios/models.

### Evolution: Generative BI

- From static dashboards to conversational analytics.
- Natural Language Querying (Text-to-SQL).
- AI Agents as Data Analysts.
- Democratization of Data.

### Data-Driven vs Model-Driven Decision Making

- **Traditional BI (Data-Driven)**: Descriptive & Diagnostic; dashboards, historical reports; human processes data with intuition.
- **Modern AI/Agentic BI (Model-Driven)**: Predictive & Prescriptive; scenario simulations, algorithmic recommendations, autonomous actions; human does strategic oversight.

---

## 05. Building and Managing Information Systems

### Systems Development and Organizational Change (四种变革)

1. **Automation** (自动化): increases efficiency, replaces manual tasks.
2. **Rationalization** (合理化): streamlines standard operating procedures.
3. **Business process redesign** (BPR, 业务流程重组): analyze, simplify, redesign business processes; reorganize workflow, combine steps, eliminate repetition.
4. **Paradigm shifts** (模式转换): rethink nature of business, define new business model, change nature of organization.

### Business Process Management (BPM)

Variety of tools and methodologies to analyze, design, optimize processes. BPR steps: Identify processes for change → Analyze existing processes → Design new process → Implement → Continuous measurement.

### Core Activities in Systems Development

| Activity | Description |
|:---|:---|
| Systems analysis | Identify problems, specify solutions, establish information requirements |
| Systems design | Create design specifications |
| Programming | Translate design specifications into program code |
| Testing | Unit testing, systems testing, acceptance testing |
| Conversion | Plan conversion, prepare documentation, train users/technical staff |
| Production and maintenance | Operate, evaluate, modify the system |

### Systems Analysis

- Analysis of problem: defining problem, identifying causes, process modeling (as-is).
- Specifying solutions: identifying information requirements, process modeling (to-be).
- Feasibility study → Systems proposal report.

### Systems Design

Describes system specifications delivering functions identified during analysis. Addresses all managerial, organizational, technological components. **Insufficient user involvement is a major cause of system failure.**

### Testing

- **Unit testing**: tests each program separately.
- **System testing**: tests functioning of system as a whole.
- **Acceptance testing**: ensures system is ready for production use.
- **Test plan**: all preparations for series of tests.

### Conversion Strategies (四种切换策略)

1. **Parallel strategy**: old and new run simultaneously
2. **Direct cutover**: immediate switch
3. **Pilot study**: test in one area first
4. **Phased approach**: gradual roll-out

### Production and Maintenance

Maintenance breakdown: ~20% debugging/emergency, ~20% hardware/software/data changes, ~60% user enhancements/documentation improvement/recoding.

### Methodologies vs Approaches

- **Methodologies**: methods for modeling and designing systems. Two alternatives: (1) Structured methodologies; (2) Object-oriented development.
- **Approaches**: methods for organizing core activities. Five alternatives: (1) Traditional systems life cycle; (2) Prototyping; (3) Application software packages; (4) End-user development; (5) Outsourcing.

### Structured Methodologies

- Step-by-step, progressive, process-oriented.
- Separate data from processes.
- Tools: ER diagram (ERD), Data flow diagram (DFD), Structure chart.

### Object-Oriented Development

- Basic unit: **Object** — combines data and processes that operate on those data.
- Based on concepts of **class** and **inheritance**.
- More iterative and incremental; objects are reusable.

### CASE (Computer-Aided Software Engineering)

Software tools to automate development: graphics, screen/report generators, analysis/checking tools, data dictionaries, code/documentation generators. Standard: UML.

### Approaches to Systems Development

| Approach | Description | Pros | Cons |
|:---|:---|:---|:---|
| Traditional SDLC (Waterfall) | Phased, one stage finishes before next; formal division of labor | Structured, good for large complex systems | Costly, time-consuming, inflexible |
| Prototyping | Build experimental system rapidly for user evaluation | Good for uncertain requirements, fulfills user needs | May gloss over essential steps, may not scale |
| End-User Development | End users develop simple systems with little technical help | Rapid completion, high user involvement | Not for processing-intensive, inadequate management/control |
| Application Software Packages | Save time/money; customization features | Fast, proven | May not fit all needs, organizational change required |
| Outsourcing | Cloud/SaaS, external vendors; domestic (skills/resources) or offshore (cost-savings) | Access to expertise, potential cost savings | Hidden costs, exposing proprietary processes |

### Project Risk Dimensions

- **Project size** (costs, time, organizational units affected)
- **Organizational complexity**
- **Project structure** (structured, defined requirements = lower risk)
- **Experience with technology**

### Change Management

- Very high failure rate (up to 70% for BPR projects).
- Challenges: employee concerns, resistance by key managers, changing job functions, user-designer communication gap.
- **Change agent** (变革代理人): one role of systems analyst — redefines configurations, interactions, job activities, power relationships.

### Cost-Benefit Analysis

- **Tangible benefits**: quantifiable, monetary value (increased productivity, lower costs, reduced workforce).
- **Intangible benefits**: cannot be immediately quantified (better customer service, enhanced decision making).
- TPS → more tangible benefits; MIS/DSS/ESS → more intangible benefits.

### Capital Budgeting Models

- Payback method (回收期法)
- Accounting rate of return on investment (ROI, 投资回报率)
- Net present value (净现值)
- Internal rate of return (IRR, 内部收益率)
- Limitations: focus on financial/technical aspects; overlook social/organizational dimensions, organizational disruptions, intangible benefits.

### Risk Control Tools

- **Internal integration tools**: experienced team, frequent meetings, technical expertise.
- **Formal planning and control tools**: Gantt charts (timing/duration of tasks, human resource requirements), PERT charts (tasks and interrelationships, sequence, critical path, slack time).
- **External integration tools**: link implementation team to users; strategies to overcome user resistance (participation, education/training, incentives, UI improvement).

---

## 06. Systems Analysis Fundamentals

### Systems Analysis and Design

To analyze, design, and implement improvements through computerized IS, in support of users and business functioning. Purpose: align systems with business targets, structure/guide development, involve users.

### Key Failure Cases

| Case | Key Flaw |
|:---|:---|
| Lidl SAP (€500M) | Inadequate requirements (purchase vs retail price logic); Refusal to re-engineer processes (massive customizations) |
| Moutai Data Middle Platform | Ignored organizational culture (SOE vs internet-style); Over-centralization without fallback; Excluded middle-level managers |
| MissFresh SCM Bankruptcy | Underestimated demand volatility (spoilage >30%); No margin-aware cost modeling; Technical feasibility over economic feasibility |

### Three Roles of Systems Analyst

1. **Consultant** (外部顾问): "I can tell you what to build."
2. **Supporting Expert** (内部专家): "I'll help you build it right."
3. **Agent of Change** (变革代理): "How can we make sure this gets done?"

### Systems Analyst Qualities

Problem solver, Communicator, Strong personal and professional ethics, Self-disciplined and self-motivated.

### Three Development Methodologies

1. **SDLC** (Systems Development Life Cycle): phased approach with specific cycle of analyst and user activities.
2. **Agile approach**: interactive, incremental, frequent iterations.
3. **Object-Oriented Systems Analysis and Design**: facilitates rapid change in dynamic environments; uses UML.

### SDLC Phases

1. **Identifying Problems, Opportunities, and Objectives** → Feasibility report
2. **Determining Information Requirements** → Understanding of user work and business functions
3. **Analyzing System Needs** → System proposal (using DFD, data dictionary, structured decision analysis)
4. **Designing the Recommended System** → Model of actual system
5. **Developing and Documenting Software** → Programs + system documentation
6. **Testing and Maintaining the System** → Problems identified, updated programs
7. **Implementing and Evaluating the System** → Trained personnel, installed system

### Agile Approach Phases

Exploration → Planning → Iterations to First Release (testing, feedback, change) → Productionizing → Maintenance.

### Three Modeling Tools (三种建模工具)

- **Context-level DFD** (数据流图, 动态建模): data flows into/out of system, processing of data.
- **Entity-Relationship Model** (ERD, 静态建模): entities and their relationships.
- **Use Case Modeling** (用例图, 功能建模): what a system does without describing how it works.

### DFD Basic Elements

- **Process**: action or group of actions taking place.
- **Entity**: person, group, department, or system that receives or originates information.
- **Data flow**: information being passed from or to a process.

### ERD Relationships

Three types: One-to-one, One-to-many, Many-to-many.

### Use Case Diagram Elements

- **Actor**: particular role of a user (exists outside system).
- **Use case**: oval indicating the task.
- **Connecting lines**: arrows and lines for behavioral relationships.

### Four Types of Use Case Behavioral Relationships

| Relationship | Symbol | Meaning |
|:---|:---|:---|
| Communicates | Line (no arrowheads) | Actor connected to use case |
| Includes | `<< include >>` | Common behavior; arrow points to common use case |
| Extends | `<< extend >>` | Handles exceptions; arrow points from extended to basic use case |
| Generalizes | Arrow to general thing | One thing is more general than another |

### Use Case Scenario

Description of the use case covering: identifiers and initiators, steps performed, conditions/assumptions/questions.

### Project Management Tools

- **Work Breakdown Structure**: decomposition (product-oriented or process-oriented).
- **Time Estimation**: relying on experience, analogies, three-point estimation, function points, COCOMO II.
- **Gantt Charts**: simple, good for end-user communication, drawn to scale.
- **PERT Diagrams**: useful when activities can be done in parallel; identifies critical path, slack time, order of precedence.

---

## 07. Information Gathering

### Interactive Methods (交互式方法)

1. **Interviewing**: reveals opinions, feelings, goals, HCI concerns.
2. **Joint Application Design (JAD)**: replaces series of interviews with group setting; saves time, rapid development, improved user ownership.
3. **Questionnaires**: scale, quantify, prioritize, segment; provide quantitative backbone for evidence-based design.

### Interview Question Types

- **Open-ended**: "What's your opinion of..."
- **Closed**: "How many times a week..."
- **Bipolar**: "Do you agree or disagree that..."
- **Probes**: "Why?", "Give an example..."

### Question Arrangement Structures

- **Pyramid** (Closed → Open): warms up reluctant interviewees.
- **Funnel** (Open → Closed): when interviewee feels emotional.
- **Diamond** (Closed → Open → Closed): combines both strengths, takes longer.

### Interview Closing

Always ask "Is there anything else?", summarize/feedback, ask who to talk with next, set up future appointments, thank them.

### Unobtrusive Methods (无干扰方法)

Techniques for gathering information without direct stakeholder interaction. Reveal actual vs stated processes, identify hidden patterns, complement interviews/JAD with objective evidence.

### Major Unobtrusive Methods

- **Sampling**: Simple Random, Stratified (分 subgroups), Systematic (every k-th), Purposive (hand-pick informative cases).
- **Quantitative Document Analysis**: extract numerical patterns (error rates, completion times).
- **Qualitative Document Analysis**: understand context, meaning, narratives (tone, recurring themes, blame patterns).
- **Text Analytics**: mine unstructured feedback (concept frequency, sentiment, co-occurrence).
- **Observation (Playscript)**: record decision-maker actions in real-time (who, action, information activity).
- **STROBE** (Structured Observation of the Environment): 7 elements — workspace, digital-tool placement, storage, props, external sources, lighting/color, clothing/appearance. Symbols: ✓ confirmed, X reversed, ◇ look further, □ supplemented.

### Requirements-Specification Document Contents

Project overview, Stakeholder analysis, Functional requirements (prioritized use cases), Non-functional requirements, Business rules, Data requirements, Assumptions & constraints.

---

## 08. Process Modeling (I)

### Prototyping Types (四种原型)

1. **Patched-up** (拼凑型): works but inefficient; all features but rough implementation.
2. **Nonoperational** (非操作原型): nonworking scale model for testing certain design aspects.
3. **First-of-a-series** (首系列/示范原型): pilot, completely operational, used when many installations planned.
4. **Selected features** (选择性功能原型): some essential features only, built in modules, part of actual system.

### Agile Modeling Values & Principles

Values: Communication, Simplicity, Feedback, Courage.
Key principles: satisfy customer through working software, embrace change, deliver incrementally/frequently, daily customer-analyst collaboration, trust motivated individuals, face-to-face conversation, sustainable development, self-organizing teams, rapid feedback.

### Scrum Framework

Iterative approach with time-boxed **Sprints** (冲刺).

- **Roles**: Product Owner (产品负责人), Scrum Master (Scrum主管), Developers.
- **Artifacts**: Product Backlog, Sprint Backlog, Increment.
- **Events**: Sprint Planning, Daily Scrum (15 min stand-up), Sprint Review (demo to stakeholders), Sprint Retrospective (process improvement).
- Foundations: Transparency (透明), Inspection (检视), Adaptation (调适).

### DevOps

Practices, cultural philosophies, tools that automate and integrate processes between software development and IT teams.

### Data Flow Diagrams (DFD)

Graphically characterize data processes and flows. Advantages: no early commitment to technical implementation, understanding interrelatedness of systems/subsystems, communicating system knowledge to users, analyzing proposed system.

### DFD Basic Rules

- Must have at least one process.
- No freestanding objects.
- Process must have both input and output data flow.
- Data store must be connected to at least one process.
- External entities should not be connected to one another.

### DFD Top-Down Development

1. List business activities → determine External entities, Data flows, Processes, Data stores.
2. Create **Context Diagram** (highest level, one process "0", all external entities and major data flows).
3. Draw **Diagram 0** (explosion of context, up to 9 processes, major data stores, all external entities).
4. Create **Child Diagrams** (each process on diagram 0 may explode; child diagram number = parent process number).
5. Check for errors.
6. Develop physical DFD from logical DFD.
7. Partition the physical DFD.

### Logical vs Physical DFD

| Feature | Logical | Physical |
|:---|:---|:---|
| Depicts | How business operates | How system will be implemented |
| Processes | Business activities | Programs, modules, manual procedures |
| Data stores | Collections of data (regardless of storage) | Physical files/databases, manual files |
| System controls | Business controls | Validation, record status, system security |

### From Logical to Physical DFD

1. Derive logical DFD for current system by examining physical DFD and isolating unique business activities.
2. Create logical DFD for new system by adding required input/output/processes.
3. Derive physical DFD by examining new logical diagram processes.

### CRUD

Create, Read, Update, Delete — activities that must be present for each master file. Use CRUD matrix to show where each operation occurs.

### Event Modeling

Input flow from external entity = **trigger** (starts process activities). Create DFD fragment for each unique system event. Use **Event Response Tables**: Event, Source, Trigger, Activity, Response, Destination.

### Partitioning

Dividing DFDs into collections of manual procedures and computer programs. Purposes: Different user groups, Timing, Similar tasks, Efficiency, Consistency of data, Security.

---

## 09. Process Modeling (II)

### Data Dictionary

A reference work of data about data (metadata). Categories: Data flows, Data structures, Elements, Data stores.

### Data Flow Definition

ID, Unique descriptive name, General description, Source, Destination, Type of data flow, Name of data structure, Volume per unit time, Comments.

### Data Structure Notation

- `=` means "is composed of"
- `+` means "and"
- `{}` repetitive elements
- `[]` either/or situation
- `()` optional element

### Data Element Fields

Element ID, Name, Aliases, Description, Base or derived, Length, Data type, Input/output formats, Validation criteria, Default value.

### Data Store Fields

ID, Name, Alias, Description, File type, File format, Max/average record count & growth/year, File/data set name, Data structure, Primary/secondary keys.

### Process Specifications (Minispecs)

Created for primitive processes. Goals: Reduce ambiguity, obtain precise description, validate system design. Elements: Process number, Process name, Description, Input/output data flows, Type of process, Process logic description, Logic method reference, Unresolved issues.

### Three Logic Description Methods

#### 1. Structured English (结构化自然语言)

- Used for formulas, iteration, or non-complex structured decisions.
- Structures: Sequential, Decision (IF-THEN-ELSE), Case, Iteration (DO WHILE).

#### 2. Decision Tables (决策表)

Four quadrants: Conditions, Condition alternatives, Actions, Rules.
Check for: Incompleteness, Impossible situations, Contradictions, Redundancy.

#### 3. Decision Trees (决策树)

Used when complex branching or when sequence of conditions is critical. Built left to right.

### Choosing a Structured Decision Analysis Technique

- **Structured English**: many repetitious actions, communication to end users important.
- **Decision tables**: complex combination of conditions/actions/rules, need to avoid impossible situations/redundancies/contradictions.
- **Decision trees**: sequence of conditions/actions is critical, not every condition relevant to every action.

---

## 10. Object-Oriented Systems Analysis and Design

### OO Concepts

- **Object** (对象): persons, places, or things relevant to the system. Consists of structure (attributes) + behavior (methods).
- **Class** (类): defines shared attributes and behaviors found in each object. Instantiate = object created from class.
- **Inheritance** (继承): derived class inherits all attributes and behaviors of base class. Reduces programming labor. Only in OO systems.

### UML Components

- **Things**: Structural (classes, interfaces, use cases...), Behavioral (interactions, state machines), Group (boundaries), Annotation (notes).
- **Relationships**: Structural (dependencies, aggregations, associations, generalizations), Behavioral (communicates, includes, extends, generalizes).
- **Diagrams**: Structural (class, object, component, deployment) and Behavioral (use case, sequence, collaboration, statechart, activity).

### UML Diagrams Overview

| Diagram | Purpose |
|:---|:---|
| Use Case Diagram | What the system does (no how) — starting point |
| Activity Diagram | Overall flow of activities, sequential/parallel, decisions |
| Sequence Diagram | Interactions between classes/objects over time |
| Communication Diagram | Same as sequence but emphasizes object organization |
| Class Diagram | Static features, class relationships, data storage requirements |
| Statechart Diagram | Different states an object may have |

### Use Case Diagram (review)

Actor, Use case (oval), Connecting lines. Four behavioral relationships: Communicates, Includes, Extends, Generalizes.

### Activity Diagram Symbols

Rectangle (rounded ends) = activity, Arrow = flow, Diamond = decision, Long flat rectangle = synchronization, Filled circle = start, Black circle in white = end, Swimlanes = roles.

### Sequence Diagram Layers

1. **Presentation layer**: what user sees (interface/boundary classes)
2. **Business layer**: unique rules for this application (control classes)
3. **Persistence/data access layer**: obtaining/storing data (entity classes)

### Class Diagram: Types of Classes

- **Entity classes**: real-world items (like ERD entities)
- **Interface/boundary classes**: means for users to work with system
- **Abstract classes**: linked to concrete classes in generalization/specialization; cannot be directly instantiated
- **Control classes**: control flow of activities

### Relationships in Class Diagrams

- **Associations**: simplest type
- **Whole/part**: Aggregation (whole = sum of parts), Collection (members may change), Composition (whole has responsibility for parts).
- **Association classes**: break up many-to-many associations.

### Statechart Diagrams

Used when: class has complex life cycle, instance may update attributes in many ways, class has operational life cycle, two classes depend on each other, object's current behavior depends on prior events.

### UML Steps

Define use case model → Continue UML diagramming during analysis → Develop class diagrams → Draw statechart diagrams → Begin design by refining UML → Document system design in detail.

---

## 11. Designing Output and Input

### MVC Pattern

View → Controller → Model → View (用户点击 → 控制器 → 创建/更新模型 → 更新视图).

### Output Rules

1. **Choose the right output method (medium)**: Displays/Dashboards, Audio/Podcasts, Mobile/Tablets, Printers/Hard Copy — each with distinct advantages.
2. **Keep it simple and uncluttered**: single screen, meaningful grouping, summarize over raw data.
3. **Neutralize output bias**: sorting bias, graphical bias, truncation bias, aggregation bias.
4. **Provide context alongside summarization**: number without context is just a number.

### Output Methods

| Medium | Best For |
|:---|:---|
| Displays/Dashboards | Interactive, real-time, dynamic data |
| Audio/Podcasts | Hands-free, transient messages |
| Mobile/Tablets | On-the-go data consumption |
| Printers/Hard Copy | Archival, regulatory compliance |

### Input Rules

1. **Choose the right input method (Medium)**: Keyboard, Voice, Barcode/QR, Touch/Gesture.
2. **Ensure accurate completion**: smart navigation, defaults, validation.
3. **Follow natural flow**: top-down, left-right.
4. **Use proper GUI control for the data type**.

---

## 12. Designing Databases and Human-Computer Interaction

### Reality → Data → Metadata

Reality (a student) → Data (row in table) → Metadata (table schema: column names, types).

### E-R Diagram to Relational Schema

E-R Diagram (conceptual) → Relational Schema (logical, tables with keys).

### Normalization (规范化)

Three anomalies: **Update** (phone only updated in one row), **Insert** (can't add customer without order), **Delete** (last order gone → customer gone).

Normalization = eliminating multiple copies of one truth.

| Form | Rule | Plain Meaning |
|:---|:---|:---|
| 1NF | Atomic values, no repeating groups | One cell, one fact |
| 2NF | 1NF + no partial dependency on composite key | Don't mix two things in one table |
| 3NF | 2NF + no transitive dependency | Non-key attributes depend on the key only |

Practice: Aim for 3NF by default. Normalize for correctness, denormalize for performance. Document both.

### OLTP vs OLAP

| | OLTP (Operational) | OLAP (Analytical) |
|:---|:---|:---|
| Purpose | Run the business | Understand the business |
| Focus | Consistency | Analyzability |
| Workload | Many small transactions | Few large queries |
| Schema | Normalized (2NF-3NF) | Denormalized |
| Example | Place an order | Which products grew 30% YoY? |

### NoSQL Database Types

| Type | Example | Gains |
|:---|:---|:---|
| Key-Value | Redis, DynamoDB | Brutal speed |
| Document | MongoDB | Flexible nested data |
| Column-Family | Cassandra, HBase | Massive write scale |
| Graph | Neo4j | Native relationship traversal |

### Vector Databases (向量数据库)

Store MEANING as COORDINATES, not text. Neural network (embedding model) learns coordinates. Similar meaning → close distance (cosine similarity). Traditional DB: find by exact number; Vector DB: find by position on a semantic map. Tools: Pinecone, Weaviate/Milvus, ChromaDB, pgvector.

### Database Summary

- **OLTP**: Relational, normalized (2NF-3NF)
- **OLAP**: Relational, denormalized
- **Fast/flexible access**: NoSQL
- **Semantic search/AI retrieval**: Vector databases

### HCI: The Mouth and Ears of the System

Designing for HCI = ensuring system functionality/usability, providing effective user interaction support, enhancing pleasant user experience. **Fit between human, computer, and task.**

### Types of User Interfaces

Natural-language, Question-and-answer, Menus, Form-fill, Command-language (CLIs), Graphical User Interfaces (GUIs), Web interfaces. Not mutually exclusive — usually combined.

### Seven Types of Feedback

1. Accepting input: "I heard you"
2. Recognizing task: "I understand what you want"
3. Producing more information: "I need more from you"
4. Accepting/processing: "Working on it..." (spinner, progress)
5. Rejecting input: "I can't do that" (with WHY)
6. Communicating delay: "This is taking a while" (estimated time)
7. Completing task: "Done. Here's the result."

### The AI Era in HCI

| Era | User must... | System provides... |
|:---|:---|:---|
| Traditional | Learn SQL, filters, syntax | Exact match on structured data |
| AI-Native | Speak natural language | Semantic match + generated answer |
| Agentic | State a GOAL | Plans and executes multiple steps autonomously |

### Agentic Interface

User states goal → system plans and executes multiple steps, asking only at critical checkpoints. Requires: tools the agent can call, memory across turns, human-in-the-loop checkpoints. The user **delegates**, not operates.

---

## 13. Quality Assurance

### Purposes of Codes

- **Surrogate key** (代理键, 无业务意义): Simple sequence code.
- **Meaningful codes** (有业务意义): Block Sequence Code, Alphabetic Derivation Code, Significant-Digit Subset Code.

### Human Purposes for Coding

Keeps track of something, Classifies information, Conceals information, Reveals information, Requests appropriate action.

### Coding Types

| Code Type | Description | Example |
|:---|:---|:---|
| Simple Sequence | Number assigned with no relation to data | customer_id: 00000847 |
| Block Sequence | Data grouped by common characteristics | Software types: 100-199 Browser, 200-299 Database |
| Alphabetic Derivation | Using letters to identify accounts | (common in account numbers) |
| Significant-Digit Subset | Describe product by membership in subgroups | LM-X3-W-STD = [category]-[model]-[color]-[spec] |

### Coding Guidelines

Be concise, Keep codes stable, Ensure uniqueness, Allow sortability, Avoid confusion, Keep uniform, Allow modification, Make meaningful.

### The Coding Decision (Summary)

- **SKU**: Significant-digit subset (meaningful — products are classified)
- **customer_id**: Simple sequence (no story — privacy, stability)
- **order_id**: Block sequence (events, may be classified by date/type)

### Effective Data Capture Core Principle

**Enter what only humans can know; let the computer figure out the rest.** A base data item should be entered only once at only one point.

Three questions for data entry:
- Is it changeable? → YES capture each time; NO → look up from master data.
- Does it differentiate this record? → YES capture; NO → derive it.
- Can the computer compute it? → NO capture; YES → generate it.

### Input Validation Types

- **Missing Data**: required field check
- **Field Length**: expected length
- **Class/Composition**: right character type
- **Range/Reasonableness**: plausible range
- **Comparison with Stored Data**: FK must exist
- **Self-Checking Digits**: Luhn algorithm
- **Pattern Match (Regex)**: email, phone format

### Two-Layer Validation

- **Client-Side**: instant feedback, catches honest mistakes, improves UX, but can be bypassed.
- **Server-Side**: final defense, never trust client data, enforces business rules, protects against malicious input.

### Total Quality Management (TQM)

Full organizational support of quality management. "Test-First" Principle:
- Test plan → Unit testing → System testing → Acceptance testing.
- **Structured Walkthroughs** (结构化复核): peer reviewers monitor programming/development, point out problems.

### Modularity

Why complex systems must be modular: Human cognition limits, enables parallel work, change isolation. **Top-Down Approach**: whole → subsystems → modules (each does ONE thing).

### Documentation

- "If It Isn't Written Down, It Doesn't Exist"
- **Docs-as-Code**: documentation in Git, alongside code, versioned and reviewed.
- **AI-Assisted Documentation**: LLMs auto-generate from code, summarize meeting notes, chatbots as "living documentation."

### Training

Training is not knowledge transfer — it's change management. Elements: Objectives, Methods, Sites, Materials.

### Conversion Strategies

1. **Parallel**: old + new run together
2. **Direct cutover**: immediate switch
3. **Pilot study**: test in one area
4. **Phased approach**: gradual roll-out

### Security, Recovery, Evaluation

- **Security**: Authentication/authorization, availability, confidentiality.
- **Disaster Recovery**: Backup + redundancy (assume everything will fail eventually).
- **Evaluation**: Define "success" before you build.

---

## 14. Conclusion

### The MIS Analyst's Mindset

- Information systems are **socio-technical systems**.
- Technology alone does not solve organizational problems.
- Good analysis begins with understanding current work.
- Requirements emerge through investigation and negotiation.
- Models help clarify complexity.
- Design choices shape behavior, memory, and decision-making.
- Implementation is organizational change.

### Three Key Trends

1. **From Internal Systems to Ecosystem Coordination**: organizational boundaries become fluid, platform governance central, value creation depends on external participants.
2. **From Data Management to Algorithmic Decision-Making**: recording transactions → analyzing patterns → predicting outcomes → recommending actions → automating decisions. Open issues: data quality, bias, explainability, accountability, human oversight.
3. **Human-AI Relationship**: Automation (AI performs) vs Augmentation (AI helps) vs Guardianship (humans raise/cultivate AI + accountability). Central design challenge: responsibility design.

### Final Message

- IS do not simply support organizations — they help **constitute** organizations.
- They define what can be seen, measured, coordinated, and decided.
- To analyze and design IS is to participate in the design of **organizational intelligence**.

---

> **简化说明**: 本文档去除了课程后勤信息（教师联系方式、网络平台、成绩分配）、作业说明、小组名单、课堂展示安排、案例细节叙述、图片引用、重复内容等，仅保留与期末考试相关的核心知识点和概念框架。
