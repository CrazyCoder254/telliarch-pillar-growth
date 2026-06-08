import { Brain, Sparkles, Building2, Users, GraduationCap, Leaf, BookOpen, Heart, LucideIcon } from "lucide-react";

export interface SubService {
  title: string;
  description: string;
  example?: string;
}

export interface ServiceSection {
  heading: string;
  intro?: string;
  whoFor?: string[];
  whatYouGain?: string[];
  services?: SubService[];
}

export interface ServiceContent {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  tagline: string;
  overview: string[];
  sections: ServiceSection[];
  outcome?: string;
}

export const services: ServiceContent[] = [
  {
    slug: "individual-therapy",
    icon: Brain,
    title: "Individual Therapy & Development",
    shortDescription:
      "Professional psychological support and personal-growth coaching for individuals navigating stress, trauma, transitions, or seeking clarity and direction.",
    tagline: "From distress and stagnation → to clarity, resilience and purposeful living.",
    overview: [
      "We provide professional psychological support for individuals across all ages who may be experiencing emotional distress, psychological challenges, or difficulties in coping with life demands.",
      "This service is designed for individuals who feel overwhelmed, emotionally exhausted, stuck, or uncertain about how to navigate their current life experiences. These may include stress, trauma, anxiety, depression, grief, or major life transitions—whether formally diagnosed or personally experienced.",
      "Our approach is gentle, structured, and supportive—helping individuals gain clarity, understand their emotional experiences, and develop healthier ways of coping and functioning in daily life.",
    ],
    sections: [
      {
        heading: "Mental Health & Emotional Wellness",
        intro:
          "Professional psychological support for individuals experiencing emotional distress, psychological challenges, or difficulties coping with life's demands.",
        whatYouGain: [
          "Emotional stability and inner balance",
          "Clarity in thoughts, emotions, and life experiences",
          "Healing from past emotional wounds and trauma",
          "Improved coping strategies for life challenges",
          "Greater resilience and emotional control",
        ],
        services: [
          { title: "Individual Psychotherapy", description: "Support for anxiety, depression, stress, emotional overwhelm, and general mental health challenges." },
          { title: "Trauma Therapy", description: "Guided healing from deep emotional wounds, adverse life experiences, and post-traumatic stress." },
          { title: "Grief & Loss Counselling", description: "Support in processing bereavement, separation, and emotional adjustment after loss." },
          { title: "Emotional Regulation Skills Training", description: "Learning how to manage intense emotions such as anger, sadness, fear, or emotional shutdown." },
          { title: "Burnout Recovery Support", description: "Helping individuals recover from emotional exhaustion caused by prolonged stress or pressure." },
          { title: "Life Transition Counselling", description: "Support through major life changes such as divorce, relocation, career shifts, or identity transitions." },
        ],
      },
      {
        heading: "Personal Growth & Development",
        intro:
          "A structured, supportive process of self-discovery and personal improvement—helping individuals better understand themselves, strengthen their mindset, and develop clarity and direction in life. Our focus is not only on motivation, but on practical transformation—helping individuals think differently, act differently, and experience meaningful change over time.",
        whatYouGain: [
          "Increased self-awareness and personal clarity",
          "Stronger confidence and self-esteem",
          "A clearer sense of purpose and direction",
          "Improved emotional intelligence and relationships",
          "Better habits, discipline, and consistency",
          "Enhanced productivity and focus in daily life",
        ],
        services: [
          { title: "Self-Awareness & Identity Coaching", description: "Supporting individuals in understanding who they are, their values, strengths, and emotional patterns." },
          { title: "Confidence & Self-Esteem Building", description: "Strengthening self-worth, self-belief, and personal confidence in everyday life and decision-making." },
          { title: "Purpose & Life Direction Coaching", description: "Helping individuals gain clarity on goals, meaning, and long-term direction." },
          { title: "Mindset Transformation", description: "Identifying and shifting limiting beliefs that affect behaviour, success, and emotional wellbeing." },
          { title: "Habit & Behaviour Change Coaching", description: "Developing sustainable routines and healthier lifestyle patterns." },
          { title: "Productivity & Time Management Coaching", description: "Improving focus, organisation, and personal effectiveness." },
          { title: "Cognitive Restructuring", description: "Learning to identify and reframe negative thought patterns that affect emotions and behaviour." },
          { title: "Emotional Intelligence Development", description: "Strengthening the ability to understand, manage and respond to emotions—both personally and in relationships." },
        ],
      },
      {
        heading: "Our Approach",
        intro:
          "We combine clinical understanding, emotional support, and practical coaching strategies to ensure individuals not only gain insight—but also experience real, measurable improvement in their daily lives. We work with compassion, respect, and professionalism, meeting each person where they are and supporting them step by step toward stability, clarity, and growth.",
      },
    ],
    outcome:
      "We support individuals in moving from emotional distress, confusion and stagnation → to clarity, resilience and purposeful living.",
  },
  {
    slug: "family-integration",
    icon: Users,
    title: "Family Integration Services",
    shortDescription:
      "Therapeutic and developmental support for couples and families—building healthy, stable, and emotionally connected relationships.",
    tagline: "From conflict and distance → to understanding, stability and lasting connection.",
    overview: [
      "We walk alongside individuals, couples, and families in building healthy, stable, and emotionally connected relationships.",
      "Family life carries both deep meaning and real complexity. Challenges such as conflict, emotional distance, parenting pressures, and life transitions can strain relationships. At the same time, many families are simply seeking to grow, strengthen their bonds, and create more intentional ways of relating.",
      "Our approach integrates therapeutic support (to heal existing challenges) with developmental support (to build long-term relational strength)—so families are not only supported through difficulty, but equipped with practical tools for lasting connection, stability and growth.",
    ],
    sections: [
      {
        heading: "Couples & Marriage Support",
        intro:
          "We support couples at different stages of their relationship—from preparation for marriage to navigating complex relational challenges. Our focus is not only on resolving conflict, but on helping couples build deep understanding, emotional safety, and long-term partnership stability.",
        whatYouGain: [
          "Healthier communication and deeper understanding",
          "Rebuilt trust and emotional connection",
          "Clarity in relationship direction",
          "Stronger, more resilient partnerships",
        ],
        services: [
          { title: "Marriage Counselling", description: "Navigate ongoing conflict, emotional distance, withdrawal, stressors (finances, parenting, work), and rebuild intimacy, trust and partnership.", example: "A couple experiencing repeated conflict over responsibilities learns to communicate needs clearly, reduce defensiveness, and rebuild cooperation." },
          { title: "Pre-Marital Counselling", description: "Build a strong shared foundation: expectations, roles, values, communication, finances, family dynamics and emotional readiness.", example: "An engaged couple aligns on finances, extended-family involvement and future goals—preventing future conflict." },
          { title: "Relationship Conflict Resolution", description: "Identify the root causes of recurring conflict and develop healthier ways of resolving disagreements—emotional triggers, reactive patterns, communication breakdowns, boundaries and mutual respect." },
          { title: "Communication & Emotional Connection Training", description: "Active listening, emotional expression, reducing criticism and defensiveness, understanding each partner's needs, and rebuilding daily intimacy.", example: "A disconnected couple learns structured communication tools and daily check-ins that restore closeness." },
          { title: "Infidelity Recovery Counselling", description: "Process emotional trauma, anger and confusion; understand underlying patterns; rebuild trust step-by-step where reconciliation is chosen; clarify the future of the relationship.", example: "A couple works through betrayal with guided conversations, emotional processing and structured rebuilding of trust." },
        ],
      },
      {
        heading: "Family Therapy & Relationship Support",
        intro:
          "A structured, guided process that helps families understand one another, resolve conflict and improve emotional connection.",
        whoFor: [
          "Ongoing conflict or frequent misunderstandings",
          "Emotional distance or communication breakdown",
          "Parenting difficulties or inconsistency",
          "Life transitions (divorce, relocation, loss, financial stress)",
          "Blended family integration challenges",
          "Emotional tension affecting family wellbeing",
        ],
        whatYouGain: [
          "Rebuilt trust and stronger emotional bonds",
          "Improved communication and understanding",
          "Healthier conflict resolution approaches",
          "Increased parenting confidence and consistency",
          "A stable, supportive and emotionally safe home environment",
          "Healing from long-standing relational patterns",
        ],
        services: [
          { title: "Family Therapy Sessions", description: "Structured sessions that bring family members together to address challenges and strengthen relationships.", example: "Families learn how to express concerns without escalating conflict." },
          { title: "Parent–Child Relationship Counselling", description: "Focused support to strengthen connection and attachment.", example: "A parent and child rebuild trust after behavioural or emotional disconnect." },
          { title: "Parenting Support (Positive & Trauma-Informed)", description: "Guidance on raising emotionally healthy children using respectful, structured approaches.", example: "Parents learn discipline strategies that balance boundaries and empathy." },
          { title: "Blended Family Adjustment Support", description: "Navigate roles, boundaries and integration in stepfamilies.", example: "Helping step-parents and children build trust gradually." },
          { title: "Family Conflict Mediation", description: "Neutral facilitation to resolve disputes and restore harmony.", example: "Family members resolve ongoing disagreements respectfully." },
        ],
      },
      {
        heading: "Family Development Programs",
        intro:
          "Designed to support families in building strong, healthy and emotionally connected relationships over time. Rather than focusing only on problems, we focus on prevention, intentional growth and long-term relational wellbeing—practical, relatable and applicable to everyday family life.",
        whatYouGain: [
          "Stronger emotional bonds and improved family closeness",
          "Healthier and more respectful communication patterns",
          "Greater emotional awareness and understanding of each other's needs",
          "Increased parenting confidence and consistency",
          "A calmer, more structured and emotionally safe home environment",
          "Practical tools to prevent conflict before it escalates",
          "Long-term skills that support family resilience and stability",
        ],
        services: [
          { title: "Parenting Workshops", description: "Practical, interactive sessions equipping parents and caregivers with real-life tools—managing tantrums, navigating teenage behaviour, positive discipline, and supporting children through anxiety or withdrawal." },
          { title: "Family Communication Training", description: "Express feelings clearly and respectfully, listen with understanding, reduce repeated misunderstandings and create safe spaces for honest conversation.", example: "A family that often disagrees learns to pause, listen and respond calmly—reducing tension and improving daily interactions." },
          { title: "Emotional Bonding Programs", description: "Guided family connection activities, parent–child bonding exercises and rebuilding emotional closeness after conflict or distance." },
        ],
      },
      {
        heading: "Our Commitment",
        intro:
          "We are committed to creating a safe, respectful and non-judgmental space where families feel supported rather than judged. We walk alongside you with care, professionalism and compassion, helping you build healthier patterns at your own pace.",
      },
    ],
    outcome:
      "Families move from conflict, distance and misunderstanding → to understanding, stability, emotional safety and lasting connection.",
  },
  {
    slug: "education-institutions",
    icon: GraduationCap,
    title: "Education Institutions Support & Development",
    shortDescription:
      "Strengthening schools through teacher wellbeing, student development, parent partnership and sustainable support systems.",
    tagline: "From fragmented support → to aligned partnerships → to thriving learning communities.",
    overview: [
      "We partner with educational institutions to cultivate safe, supportive and high-performing learning environments where both learners and educators thrive.",
      "Schools are not only centres of academic excellence—they are foundational spaces for emotional, social and psychological development. Our role is to strengthen this ecosystem, enhancing what already exists while introducing structured, sustainable support systems.",
      "Our collaborative model brings together the three most influential pillars in a learner's life—Schools, Students and Parents—creating a consistent ecosystem of guidance, expectations and encouragement both in school and at home.",
    ],
    sections: [
      {
        heading: "What You Gain",
        whatYouGain: [
          "Improved student behaviour, focus and readiness to learn",
          "Reduced teacher burnout and enhanced staff wellbeing",
          "More effective classroom environments and learning outcomes",
          "Stronger collaboration and trust between parents and the school",
          "Early identification and timely support for student challenges",
          "Structured, sustainable systems supporting long-term wellbeing and academic success",
        ],
      },
      {
        heading: "Teacher & Staff Wellbeing",
        intro:
          "A supportive framework that helps educators manage the emotional demands of teaching, maintain wellbeing and enhance classroom effectiveness. For teachers, school leaders and administrative staff navigating workload pressures, classroom challenges or signs of burnout.",
        whatYouGain: [
          "Improved emotional resilience and wellbeing among staff",
          "Greater confidence in managing classroom dynamics",
          "Reduced burnout and increased staff retention",
          "Stronger, more positive teacher–student relationships",
        ],
        services: [
          { title: "Teacher Wellness Programs", description: "Termly wellbeing sessions and ongoing support frameworks." },
          { title: "Burnout Prevention & Stress Management", description: "Training to recognise and manage chronic stress." },
          { title: "Trauma-Informed Teaching", description: "Approaches for diverse learners and sensitive classroom situations." },
          { title: "Classroom Engagement Strategies", description: "Emotional management and effective student engagement." },
        ],
      },
      {
        heading: "Student Development Programs",
        intro:
          "Holistic programs supporting learners' emotional, social and psychological development alongside academic achievement. For students across primary, secondary and tertiary levels.",
        whatYouGain: [
          "Improved emotional awareness and self-regulation",
          "Better behaviour, peer relationships and classroom participation",
          "Increased confidence, discipline and motivation",
          "Stronger coping skills for academic and life challenges",
          "Proper career path planning and enhancement",
          "Enhanced decision-making skills",
        ],
        services: [
          { title: "Social-Emotional Learning (SEL)", description: "SEL programs integrated into school life." },
          { title: "Mental Health Awareness Sessions", description: "Wellbeing education for students at every level." },
          { title: "Anti-Bullying & Resilience Training", description: "Respect, resilience and healthy peer relationships." },
          { title: "Life Skills Development", description: "Decision-making, communication and self-management." },
          { title: "Planning, Actualisation, Monitoring & Evaluation Skills", description: "Practical tools for setting and pursuing goals." },
        ],
      },
      {
        heading: "School Systems Support",
        intro:
          "Strategic support that helps schools establish structured, practical and sustainable mental health and student support systems. Built for school leadership teams, boards and institutional decision-makers.",
        whatYouGain: [
          "A more organised, proactive approach to student wellbeing",
          "Clear pathways for identifying and supporting at-risk learners",
          "Improved consistency in handling behavioural and emotional issues",
          "Stronger institutional capacity to support staff and students",
        ],
        services: [
          { title: "Counselling System Setup", description: "Build a school-wide student support system." },
          { title: "Wellbeing Policy Development", description: "Mental health and wellbeing frameworks." },
          { title: "Crisis Response Frameworks", description: "Intervention plans for emergencies and incidents." },
          { title: "School Wellbeing Assessments", description: "Audits and improvement planning." },
        ],
      },
      {
        heading: "Parent Engagement & Partnership Programs",
        intro:
          "Structured initiatives that meaningfully involve parents as partners in their children's learning and development.",
        whatYouGain: [
          "Stronger alignment between home and school expectations",
          "Improved student behaviour through consistent support",
          "Better communication between parents and educators",
          "Increased parental confidence in supporting children's needs",
        ],
        services: [
          { title: "Parent Education Workshops", description: "Supporting learning at home, adolescent development and emotional wellbeing." },
          { title: "Parent–Teacher Engagement Forums", description: "Dialogue sessions to align home and school." },
          { title: "Family-Based Support Interventions", description: "Targeted help where needed." },
          { title: "Parenting Skills & Communication Training", description: "Ongoing parent support programs and forums." },
        ],
      },
      {
        heading: "Core Focus Areas",
        intro:
          "Student Wellbeing · Teacher Capacity · Parent Engagement · School Culture · Sustainable Systems. We bring teachers, students, school systems and parents together into a holistic support ecosystem so development is reinforced across every area of a learner's life.",
      },
    ],
    outcome:
      "Schools move from fragmented support → to aligned partnerships → to thriving learning communities.",
  },
  {
    slug: "corporate-wellbeing",
    icon: Building2,
    title: "Corporate & Organizational Wellbeing",
    shortDescription:
      "Mentally healthy, emotionally intelligent and sustainably high-performing workplaces—where people and performance thrive together.",
    tagline: "Sustainable performance is driven by the wellbeing of your people.",
    overview: [
      "At the heart of every successful organisation are people—leaders making difficult decisions, teams navigating pressure, and employees balancing work with personal demands. While productivity and performance remain central, these outcomes are deeply influenced by mental health and emotional wellbeing.",
      "We exist to bridge this connection. When people feel supported, emotionally balanced and psychologically equipped, they think clearly, engage meaningfully and perform at their highest level.",
      "We provide integrated mental-health and personal-development support tailored to the evolving needs of individuals, teams and institutions—professional, evidence-informed and built around your unique context.",
    ],
    sections: [
      {
        heading: "What You Gain",
        whatYouGain: [
          "A more engaged, motivated and emotionally supported workforce",
          "Reduced burnout, absenteeism and staff turnover",
          "Leaders who communicate effectively and lead with clarity and empathy",
          "Teams that collaborate better and resolve conflict constructively",
          "A healthier, more positive workplace culture",
          "Sustainable systems supporting both wellbeing and performance",
        ],
      },
      {
        heading: "Our Approach — Four Interconnected Areas",
        services: [
          { title: "Supporting Your Workforce", description: "Helping employees manage stress, build resilience and feel supported in their roles." },
          { title: "Strengthening Leadership", description: "Equipping leaders with the emotional intelligence and skills to lead people effectively." },
          { title: "Building Strong Teams", description: "Improving how teams communicate, collaborate and navigate challenges together." },
          { title: "Shaping Organizational Culture", description: "Creating systems and environments where wellbeing and productivity coexist." },
        ],
      },
      {
        heading: "Employee Wellness Programs",
        intro:
          "Thoughtfully designed programs supporting employees' mental and emotional wellbeing—helping them cope with stress and remain productive and engaged. For organisations experiencing high stress, burnout, low morale, absenteeism or declining productivity.",
        whatYouGain: [
          "Healthier, more focused employees",
          "Reduced stress-related absenteeism",
          "Improved morale and job satisfaction",
          "A culture where employees feel valued and supported",
        ],
        services: [
          { title: "Employee Mental Health Programs", description: "Monthly wellness sessions, counselling access and wellbeing check-ins.", example: "A quarterly mental health series addressing stress, anxiety and work-life balance." },
          { title: "Stress & Burnout Workshops", description: "Recognise burnout early and apply coping strategies.", example: "“Managing Workplace Stress During High-Pressure Periods” workshop." },
          { title: "Workplace Counselling Services", description: "Confidential one-on-one sessions for personal or work-related challenges.", example: "On-site or virtual counselling days available to staff." },
          { title: "Emotional Wellness Check-ins", description: "Structured surveys to monitor wellbeing and provide early support.", example: "Monthly wellbeing pulse check followed by targeted support sessions." },
        ],
      },
      {
        heading: "Leadership Development",
        intro:
          "Coaching and training programs that strengthen leadership capacity through emotional intelligence, communication and people-centred management. For executives, managers, supervisors and emerging leaders.",
        whatYouGain: [
          "Leaders who communicate clearly and empathetically",
          "Better decision-making under pressure",
          "Stronger team trust and engagement",
          "Improved conflict management and accountability",
        ],
        services: [
          { title: "Emotional Intelligence for Leaders", description: "Self-awareness, empathy and managing team dynamics.", example: "Workshops on managing emotions while leading others." },
          { title: "Leadership Coaching & Mentoring", description: "1:1 or group coaching tailored to leadership challenges.", example: "Coaching a manager navigating team conflict or performance issues." },
          { title: "Communication & Conflict Management Training", description: "Tools for difficult conversations and healthy workplace relationships.", example: "“Having Difficult Conversations with Confidence” training." },
          { title: "Decision-Making Under Pressure", description: "Stay clear, calm and strategic in high-stakes situations.", example: "Scenario-based leadership simulations." },
        ],
      },
      {
        heading: "Team & Culture Development",
        intro:
          "Programs designed to strengthen collaboration, improve communication and build a positive, cohesive workplace culture.",
        whatYouGain: [
          "Improved teamwork and collaboration",
          "Reduced conflict and misunderstandings",
          "Stronger alignment with organisational goals",
          "A more inclusive and supportive work environment",
        ],
        services: [
          { title: "Team Building & Cohesion Programs", description: "Structured activities that build trust and collaboration.", example: "Facilitated team retreats focused on communication and trust." },
          { title: "Conflict Resolution Facilitation", description: "Guided sessions to resolve ongoing team conflicts constructively.", example: "Mediation between departments experiencing tension." },
          { title: "Organizational Culture Transformation", description: "Shifts toward healthier, more inclusive workplace cultures.", example: "Culture audits followed by tailored intervention plans." },
          { title: "Team Performance Workshops", description: "Better processes, accountability and role clarity." },
        ],
      },
      {
        heading: "Healthcare & High-Stress Workforce Support",
        intro:
          "Specialised emotional and psychological support for healthcare workers, emergency responders and other high-stress professionals.",
        whatYouGain: [
          "Reduced emotional exhaustion and burnout",
          "Improved resilience and coping capacity",
          "Better interpersonal and client/patient interactions",
          "Increased long-term workforce sustainability",
        ],
        services: [
          { title: "Compassion Fatigue Prevention", description: "Boundaries, emotional recovery and self-care for caregivers.", example: "Workshops on boundaries and emotional recovery." },
          { title: "Burnout Recovery Support", description: "Recovery-focused group sessions and 1:1 counselling." },
          { title: "Patient/Client Communication Training", description: "Empathy and sensitivity in high-pressure interactions.", example: "Training on delivering difficult information with sensitivity." },
          { title: "Resilience Training", description: "Practical resilience toolkits for daily use." },
        ],
      },
      {
        heading: "Core Focus Areas",
        intro:
          "Employee Wellbeing · Leadership Capacity · Team Effectiveness · Organisational Culture · Sustainable Systems. People feel supported, leaders are equipped, teams function effectively, and systems sustain growth—so people and performance thrive together.",
      },
    ],
    outcome:
      "Whether you are looking to support your employees, develop your leaders, or improve your workplace culture, we walk that journey with you.",
  },
  {
    slug: "group-therapy",
    icon: Heart,
    title: "Group Therapy & Development",
    shortDescription:
      "Safe, structured, supportive spaces where individuals and communities heal, learn and grow together.",
    tagline: "Connection. Insight. Growth.",
    overview: [
      "Healing and development do not happen in isolation. Many individuals experience transformation more deeply when surrounded by others who share similar experiences, challenges, or aspirations.",
      "Through guided facilitation, structured programs and professional support, participants experience connection, insight, accountability and collective growth.",
    ],
    sections: [
      {
        heading: "Therapeutic Support Groups",
        intro:
          "Professionally facilitated group spaces designed to support emotional healing through shared experiences, guided reflection and therapeutic support—in a safe, confidential and non-judgmental environment.",
        whoFor: [
          "Grief and loss",
          "Trauma and emotional pain",
          "Addiction recovery journeys",
          "Anxiety, depression or emotional overwhelm",
          "Feelings of isolation or emotional disconnection",
        ],
        whatYouGain: [
          "A sense of emotional connection and belonging",
          "Reduced feelings of isolation and loneliness",
          "Safe space to express and process emotions",
          "Shared learning from others' experiences",
          "Emotional validation and support",
          "Gradual healing through guided group processing",
        ],
        services: [
          { title: "Group Therapy Sessions", description: "Structured therapeutic sessions guided by a trained facilitator." },
          { title: "Grief Support Groups", description: "Compassionate spaces for individuals coping with loss." },
          { title: "Addiction Recovery Groups", description: "Supportive recovery circles encouraging accountability and resilience." },
          { title: "Emotional Healing Circles", description: "Open yet guided spaces for emotional expression and reflection." },
        ],
      },
      {
        heading: "Personal Development Groups",
        intro:
          "Structured group-based coaching combining learning, reflection and accountability to support individuals in building better versions of themselves. For those who feel stuck, want stronger confidence, seek clarity on purpose, or value structured motivation and peer accountability.",
        whatYouGain: [
          "Increased motivation and consistency",
          "Stronger confidence and self-belief",
          "Clearer life direction and purpose",
          "Improved emotional awareness",
          "Better habits and discipline",
          "Supportive peer accountability and encouragement",
        ],
        services: [
          { title: "Confidence Building Workshops", description: "Overcome self-doubt through guided exercises and reflection." },
          { title: "Emotional Intelligence Groups", description: "Develop awareness of emotions and improve relationships." },
          { title: "Goal Setting & Motivation Groups", description: "Define, plan and pursue meaningful goals." },
          { title: "Mindset Transformation Sessions", description: "Replace limiting beliefs with empowering patterns." },
        ],
      },
      {
        heading: "Professional & Community Groups",
        intro:
          "Structured group programs that strengthen skills, leadership, communication and wellbeing within organisations and communities—for corporate teams, youth and student groups, community organisations and leadership cohorts.",
        whatYouGain: [
          "Improved teamwork and communication",
          "Stronger leadership capacity",
          "Increased emotional awareness within groups",
          "Healthier organisational or community culture",
          "Enhanced productivity and collaboration",
          "Strengthened collective wellbeing",
        ],
        services: [
          { title: "Corporate Workshops", description: "Communication, stress management, teamwork and workplace wellbeing." },
          { title: "Leadership Cohorts", description: "Structured group programs developing emotionally intelligent leaders." },
          { title: "Youth Empowerment Programs", description: "Build confidence, discipline and life direction in young people." },
          { title: "Community Mental Health Sessions", description: "Awareness and resilience programs for communities." },
        ],
      },
      {
        heading: "Our Core Philosophy",
        intro:
          "People heal and grow best in safe, structured and supportive communities. Our group work is built on three pillars — Connection (reducing isolation and building belonging), Insight (learning through shared experience and guided reflection) and Growth (developing practical tools for real-life transformation).",
      },
    ],
    outcome:
      "Individuals heal and grow · families strengthen and reconnect · schools build emotionally healthy learning environments · organisations develop resilient teams · communities become stronger and more connected.",
  },
  {
    slug: "specialized-therapy",
    icon: Sparkles,
    title: "Specialized Therapeutic Services",
    shortDescription:
      "Clinically informed interventions for complex emotional, psychological, behavioural and relational challenges across all ages.",
    tagline: "From distress and instability → to regulation, healing and restored wellbeing.",
    overview: [
      "We provide specialised therapeutic interventions designed for individuals, children, adolescents, couples, families and groups experiencing complex emotional, psychological, behavioural and relational challenges.",
      "These services go beyond general support. They are structured, intentional and clinically informed—focusing on healing underlying emotional patterns, restoring stability and supporting long-term psychological and relational functioning.",
      "We work with care, confidentiality and clinical sensitivity—meeting each client where they are, without judgment, and guiding them toward meaningful recovery, emotional regulation and stability.",
    ],
    sections: [
      {
        heading: "Our Approach",
        intro:
          "Specialised therapy is not only about managing symptoms—it focuses on understanding root causes, healing deep wounds, restoring regulation, supporting behavioural and cognitive change, strengthening resilience, and rebuilding healthy relationships with self and others.",
        services: [
          { title: "Play Therapy", description: "Especially for children—using play to express what cannot yet be put into words." },
          { title: "Art Therapy", description: "Creative expression for emotional processing across ages." },
          { title: "Talk Therapy / Psychotherapy", description: "Structured conversational therapy for adolescents and adults." },
          { title: "Cognitive Behavioural Therapy (CBT)", description: "Evidence-based techniques to reshape thoughts and behaviours." },
          { title: "Trauma-Informed Approaches", description: "Care that recognises and responds to the impact of trauma." },
          { title: "Emotional Regulation & Grounding", description: "Tools for managing triggers and emotional overwhelm." },
        ],
      },
      {
        heading: "Trauma-Informed Therapy & Complex Trauma Support",
        intro:
          "A structured therapeutic process for individuals affected by distressing or overwhelming life events—survivors of abuse, neglect or violence; those experiencing emotional flashbacks or triggers; and individuals with unresolved childhood trauma.",
        whatYouGain: [
          "Emotional safety and stabilisation",
          "Reduced trauma triggers and emotional overwhelm",
          "Improved sense of control and grounding",
          "Healing of long-standing emotional wounds",
        ],
        services: [
          { title: "Trauma Processing & Integration", description: "Safe, paced work with traumatic experiences." },
          { title: "Grounding & Emotional Regulation", description: "Tools to manage triggers and overwhelm." },
          { title: "Rebuilding Trust", description: "In self and others." },
          { title: "Coping & Resilience Skills", description: "Strengthen day-to-day functioning." },
        ],
      },
      {
        heading: "Anxiety, Depression & Mood Disorder Support",
        intro:
          "Clinical therapeutic support for persistent anxiety, depression, mood instability or emotional exhaustion—for those feeling persistently overwhelmed, struggling with motivation, or experiencing panic and worry.",
        whatYouGain: [
          "Improved emotional balance and stability",
          "Better daily functioning and motivation",
          "Reduced anxiety and depressive symptoms",
          "Healthier thought and behaviour patterns",
        ],
        services: [
          { title: "Cognitive Restructuring", description: "Change negative thought patterns." },
          { title: "Emotional Regulation Techniques", description: "Tools for managing intense feelings." },
          { title: "Behavioural Activation", description: "Routine building and activity scheduling." },
          { title: "Stress & Anxiety Management", description: "Practical strategies for daily life." },
        ],
      },
      {
        heading: "Child & Adolescent Therapy",
        intro:
          "Developmentally suitable and creative therapeutic methods that help young clients understand emotions, regulate behaviour and develop healthy coping and social skills. For children with behavioural or emotional difficulties, adolescents facing identity or peer challenges, and young people experiencing school stress, trauma or family-related distress.",
        whatYouGain: [
          "Improved emotional expression and understanding",
          "Better behaviour regulation and coping skills",
          "Increased confidence and self-awareness",
          "Healthier relationships with parents, peers and teachers",
          "Emotional safety and stability",
        ],
        services: [
          { title: "Play Therapy", description: "Using play to express emotions and experiences (children)." },
          { title: "Art Therapy", description: "Drawing, painting and creative expression for emotional processing." },
          { title: "Adolescent Counselling", description: "Talk-based support for teens." },
          { title: "Behavioural & Emotional Skills Training", description: "Regulation and coping skills." },
          { title: "School Adjustment & Learning Support", description: "Help with learning and school-related stress." },
          { title: "Parent-Guided Therapeutic Involvement", description: "Equip parents to support the child's healing." },
        ],
      },
      {
        heading: "Grief, Loss & Bereavement Therapy",
        intro:
          "Compassionate therapeutic support for individuals navigating loss—the death of a loved one, separation or divorce, and adjustment to major life losses.",
        whatYouGain: [
          "Emotional processing of grief and loss",
          "Acceptance and meaning-making",
          "Reduced emotional pain and overwhelm",
          "Gradual restoration of emotional stability",
        ],
        services: [
          { title: "Grief Processing", description: "Express and work through loss." },
          { title: "Coping with Sadness, Anger & Guilt", description: "Navigate complex post-loss emotions." },
          { title: "Rebuilding Life After Loss", description: "Find meaning and stability again." },
          { title: "Emotional Support Through Transition", description: "Care through the phases of bereavement." },
        ],
      },
      {
        heading: "Burnout & Emotional Exhaustion Recovery",
        intro:
          "Therapeutic support for individuals experiencing prolonged stress, emotional depletion or life/work exhaustion—professionals under chronic stress, caregivers in high-responsibility roles, and those feeling drained or disconnected.",
        whatYouGain: [
          "Restored emotional and physical energy",
          "Improved boundaries and self-care practices",
          "Better stress management capacity",
          "Renewed clarity and motivation",
        ],
        services: [
          { title: "Stress Recovery Planning", description: "Restore emotional and physical energy." },
          { title: "Boundary Setting", description: "Emotional protection and self-care." },
          { title: "Rest & Restoration Strategies", description: "Sustainable lifestyle rebalancing." },
        ],
      },
      {
        heading: "Life Transition & Adjustment Therapy",
        intro:
          "Support for those navigating major life changes and identity shifts—divorce, career change, relocation or role transitions.",
        whatYouGain: [
          "Emotional clarity during transition",
          "Reduced confusion and overwhelm",
          "Improved decision-making capacity",
          "Confidence in new life direction",
        ],
        services: [
          { title: "Adjustment Coping Strategies", description: "Move through change with stability." },
          { title: "Identity Rebuilding", description: "Self-understanding through transition." },
          { title: "Emotional Grounding During Change", description: "Stay centred amid upheaval." },
          { title: "Future Planning & Direction", description: "Clarity and confidence in next steps." },
        ],
      },
      {
        heading: "Relationship Trauma & Attachment Repair",
        intro:
          "Therapy focused on healing wounds caused by relationships and strengthening attachment security—for individuals with trust issues, repeated unhealthy patterns or recovery from painful relationships.",
        whatYouGain: [
          "Healthier relationship patterns",
          "Improved trust and emotional safety",
          "Stronger self-worth in relationships",
          "Ability to form secure attachments",
        ],
        services: [
          { title: "Attachment Pattern Exploration", description: "Understand recurring relational patterns." },
          { title: "Emotional Safety Rebuilding", description: "Develop secure ways of relating." },
          { title: "Boundary Development", description: "Healthy relational boundaries." },
          { title: "Relational Healing Work", description: "Recover from toxic or painful relationships." },
        ],
      },
      {
        heading: "Our Commitment",
        intro:
          "We provide safe, ethical and compassionate therapeutic care, grounded in respect, confidentiality and professional integrity. Every individual's journey is unique—we approach each case with care, patience and deep clinical understanding.",
      },
    ],
    outcome:
      "We support individuals in moving from emotional distress, instability and confusion → to emotional regulation, healing, resilience and restored wellbeing.",
  },
  {
    slug: "training-workshops",
    icon: BookOpen,
    title: "Training & Workshops",
    shortDescription:
      "Practical training experiences that build awareness, skills and capacity across teams and individuals.",
    tagline: "Knowledge that translates into real-world practice.",
    overview: [
      "Our workshops equip individuals, teams and institutions with practical tools across mental health, emotional intelligence, leadership and trauma-informed care.",
    ],
    sections: [
      {
        heading: "Workshop Themes",
        services: [
          { title: "Mental Health Awareness Training", description: "Foundational understanding for teams and communities." },
          { title: "Emotional Intelligence Workshops", description: "Self-awareness, empathy and relational skills." },
          { title: "Trauma-Informed Care Training", description: "For caregivers, educators and frontline staff." },
          { title: "Leadership & Personal Development Seminars", description: "Tools for leaders at every level." },
        ],
      },
    ],
  },
  {
    slug: "sustainability-wellbeing",
    icon: Leaf,
    title: "Sustainability & Holistic Wellbeing",
    shortDescription:
      "Long-term wellness program design rooted in mindfulness, balance and integration.",
    tagline: "Long-term impact, not quick fixes.",
    overview: [
      "We design sustainable wellbeing programs that integrate mindfulness, work-life balance and long-term wellness strategy for organisations and individuals.",
    ],
    sections: [
      {
        heading: "Programs",
        services: [
          { title: "Mindfulness & Stress Management", description: "Daily practices that build emotional steadiness." },
          { title: "Work-Life Integration Coaching", description: "Sustainable balance for high performers." },
          { title: "Long-Term Wellness Program Design", description: "Custom wellbeing strategies for organisations." },
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug?: string) => services.find((s) => s.slug === slug);
