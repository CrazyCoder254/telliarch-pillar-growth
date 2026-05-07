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
      "Therapy and personal-growth support for individuals navigating stress, trauma, transitions, or seeking clarity.",
    tagline: "From distress and stagnation → to clarity, resilience and purposeful living.",
    overview: [
      "We provide professional psychological support for individuals across all ages who may be experiencing emotional distress, psychological challenges, or difficulties in coping with life demands.",
      "This service is designed for individuals who feel overwhelmed, emotionally exhausted, stuck, or uncertain about how to navigate their current life experiences—whether stress, trauma, anxiety, depression, grief, or major life transitions.",
      "Our approach is gentle, structured, and supportive—helping individuals gain clarity, understand their emotional experiences, and develop healthier ways of coping and functioning in daily life.",
    ],
    sections: [
      {
        heading: "Mental Health & Emotional Wellness",
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
          "A structured, supportive process of self-discovery and improvement—helping individuals strengthen their mindset and develop clarity and direction in life.",
        whatYouGain: [
          "Increased self-awareness and personal clarity",
          "Stronger confidence and self-esteem",
          "A clearer sense of purpose and direction",
          "Improved emotional intelligence and relationships",
          "Better habits, discipline, and consistency",
          "Enhanced productivity and focus in daily life",
        ],
        services: [
          { title: "Self-Awareness & Identity Coaching", description: "Understand your values, strengths, and emotional patterns." },
          { title: "Confidence & Self-Esteem Building", description: "Strengthen self-worth and personal confidence in everyday decisions." },
          { title: "Purpose & Life Direction Coaching", description: "Gain clarity on goals, meaning, and long-term direction." },
          { title: "Mindset Transformation", description: "Identify and shift limiting beliefs that affect behaviour and wellbeing." },
          { title: "Habit & Behaviour Change Coaching", description: "Develop sustainable routines and healthier lifestyle patterns." },
          { title: "Productivity & Time Management Coaching", description: "Improve focus, organisation, and personal effectiveness." },
          { title: "Cognitive Restructuring", description: "Identify and reframe negative thought patterns affecting emotions and behaviour." },
          { title: "Emotional Intelligence Development", description: "Strengthen the ability to understand, manage and respond to emotions." },
        ],
      },
    ],
    outcome:
      "We support individuals in moving from emotional distress, confusion and stagnation to clarity, resilience and purposeful living.",
  },
  {
    slug: "family-integration",
    icon: Users,
    title: "Family Integration Services",
    shortDescription:
      "Therapeutic and developmental support for couples and families—building healthy, connected, and resilient relationships.",
    tagline: "From conflict and distance → to understanding, stability and lasting connection.",
    overview: [
      "We walk alongside individuals, couples, and families in building healthy, stable, and emotionally connected relationships.",
      "Our approach integrates therapeutic support (to heal challenges) with developmental support (to build long-term relational strength)—so families are not only supported through difficulty, but equipped with tools for lasting connection.",
    ],
    sections: [
      {
        heading: "Couples & Marriage Support",
        services: [
          { title: "Marriage Counselling", description: "Navigate conflict, emotional distance, intimacy and trust issues.", example: "A couple in repeated conflict learns to communicate needs clearly and rebuild cooperation." },
          { title: "Pre-Marital Counselling", description: "Build a strong shared foundation: expectations, values, finances, and family dynamics.", example: "An engaged couple aligns on finances and extended-family involvement—preventing future conflict." },
          { title: "Relationship Conflict Resolution", description: "Identify root causes of recurring conflict and develop healthier resolution skills." },
          { title: "Communication & Emotional Connection Training", description: "Active listening, reducing defensiveness, and rebuilding intimacy.", example: "A disconnected couple learns daily check-ins that restore closeness." },
          { title: "Infidelity Recovery Counselling", description: "Process betrayal, rebuild trust step-by-step, and clarify the future of the relationship." },
        ],
        whatYouGain: [
          "Healthier communication and deeper understanding",
          "Rebuilt trust and emotional connection",
          "Clarity in relationship direction",
          "Stronger, more resilient partnerships",
        ],
      },
      {
        heading: "Family Therapy & Relationship Support",
        intro: "A structured, guided process that helps families understand one another, resolve conflict, and improve emotional connection.",
        whoFor: [
          "Families with ongoing conflict or communication breakdown",
          "Parenting difficulties or inconsistency",
          "Life transitions—divorce, relocation, loss, financial stress",
          "Blended family integration challenges",
        ],
        services: [
          { title: "Family Therapy Sessions", description: "Structured sessions that bring family members together to address challenges and strengthen relationships." },
          { title: "Parent–Child Relationship Counselling", description: "Strengthen connection and attachment between parent and child." },
          { title: "Parenting Support (Positive & Trauma-Informed)", description: "Discipline strategies that balance boundaries and empathy." },
          { title: "Blended Family Adjustment Support", description: "Navigate roles, boundaries and integration in stepfamilies." },
          { title: "Family Conflict Mediation", description: "Neutral facilitation to resolve disputes and restore harmony." },
        ],
      },
      {
        heading: "Family Development Programs",
        intro: "Structured learning experiences that equip families with practical, real-life skills for healthy communication, positive parenting and lasting connection.",
        services: [
          { title: "Parenting Workshops", description: "Tools for tantrums, teenage behaviour, positive discipline and supporting children through anxiety." },
          { title: "Family Communication Training", description: "Express feelings clearly, listen with understanding, reduce repeated misunderstandings." },
          { title: "Emotional Bonding Programs", description: "Guided activities to rebuild trust, attachment and emotional closeness." },
        ],
      },
    ],
    outcome: "Families move from conflict, distance and misunderstanding to stability, emotional safety and lasting connection.",
  },
  {
    slug: "education-institutions",
    icon: GraduationCap,
    title: "Education Institutions Support & Development",
    shortDescription:
      "Strengthening schools through teacher wellbeing, student development, parent partnership and sustainable systems.",
    tagline: "From fragmented support → to aligned partnerships → to thriving learning communities.",
    overview: [
      "We partner with educational institutions to cultivate safe, supportive and high-performing learning environments where both learners and educators thrive.",
      "Our model brings together the three most influential pillars in a learner's life—Schools, Students and Parents—creating a consistent ecosystem of guidance and encouragement.",
    ],
    sections: [
      {
        heading: "Teacher & Staff Wellbeing",
        intro: "Support educators to manage emotional demands, maintain wellbeing and enhance classroom effectiveness.",
        whatYouGain: [
          "Improved staff resilience and wellbeing",
          "Reduced burnout and staff turnover",
          "Stronger teacher–student relationships",
        ],
        services: [
          { title: "Teacher Wellness Programs", description: "Termly wellbeing sessions and support frameworks." },
          { title: "Burnout Prevention & Stress Management", description: "Tools for recognising and managing chronic stress." },
          { title: "Trauma-Informed Teaching", description: "Approaches for diverse learners and sensitive classroom situations." },
          { title: "Classroom Engagement Strategies", description: "Emotional management and effective student engagement." },
        ],
      },
      {
        heading: "Student Development Programs",
        intro: "Holistic programs supporting learners' emotional, social and psychological development alongside academic achievement.",
        services: [
          { title: "Social-Emotional Learning (SEL)", description: "Integrated SEL programs across school life." },
          { title: "Mental Health Awareness Sessions", description: "Wellbeing education for students of all ages." },
          { title: "Anti-Bullying & Resilience Training", description: "Respect, resilience and healthy peer relationships." },
          { title: "Life Skills Development", description: "Decision-making, communication and self-management." },
          { title: "Career Path Planning", description: "Planning, actualisation, monitoring and evaluation skills." },
        ],
      },
      {
        heading: "School Systems Support",
        intro: "Strategic support for school leadership to establish structured, sustainable mental health and student support systems.",
        services: [
          { title: "Counselling System Setup", description: "Build a school-wide student support system." },
          { title: "Wellbeing Policy Development", description: "Mental health and wellbeing frameworks." },
          { title: "Crisis Response Frameworks", description: "Intervention plans for emergencies and incidents." },
          { title: "School Wellbeing Assessments", description: "Audits and improvement planning." },
        ],
      },
      {
        heading: "Parent Engagement & Partnership",
        intro: "Meaningfully involve parents as partners in their children's learning and development.",
        services: [
          { title: "Parent Education Workshops", description: "Supporting learning at home, adolescent development and emotional wellbeing." },
          { title: "Parent–Teacher Engagement Forums", description: "Dialogue sessions to align home and school." },
          { title: "Family-Based Support Interventions", description: "Targeted help where needed." },
          { title: "Parenting Skills & Communication", description: "Ongoing parent support programs and forums." },
        ],
      },
    ],
  },
  {
    slug: "corporate-wellbeing",
    icon: Building2,
    title: "Corporate & Organizational Wellbeing",
    shortDescription:
      "Mentally healthy, emotionally intelligent and sustainably high-performing workplaces.",
    tagline: "Where people and performance can thrive together.",
    overview: [
      "Sustainable performance is driven by the wellbeing of individuals. When people feel supported, emotionally balanced and psychologically equipped, they think clearly, engage meaningfully and perform at their highest level.",
      "We provide integrated mental-health and personal-development support designed to strengthen both individual wellbeing and organizational effectiveness.",
    ],
    sections: [
      {
        heading: "Employee Wellness Programs",
        whatYouGain: [
          "Healthier, more focused employees",
          "Reduced stress-related absenteeism",
          "Improved morale and job satisfaction",
        ],
        services: [
          { title: "Employee Mental Health Programs", description: "Monthly wellness sessions, counselling access and check-ins.", example: "A quarterly mental health series on stress, anxiety and work-life balance." },
          { title: "Stress & Burnout Workshops", description: "Recognising burnout early and applying coping strategies.", example: "“Managing Workplace Stress During High-Pressure Periods” workshop." },
          { title: "Workplace Counselling Services", description: "Confidential one-on-one sessions for staff." },
          { title: "Emotional Wellness Check-ins", description: "Pulse surveys followed by targeted support sessions." },
        ],
      },
      {
        heading: "Leadership Development",
        intro: "Strengthen leadership capacity through emotional intelligence, communication and people-centered management.",
        services: [
          { title: "Emotional Intelligence for Leaders", description: "Self-awareness, empathy and managing team dynamics." },
          { title: "Leadership Coaching & Mentoring", description: "1:1 or group coaching tailored to leadership challenges." },
          { title: "Communication & Conflict Management", description: "Tools for difficult conversations and healthy relationships.", example: "“Having Difficult Conversations with Confidence” training." },
          { title: "Decision-Making Under Pressure", description: "Stay clear, calm and strategic in high-stakes situations." },
        ],
      },
      {
        heading: "Team & Culture Development",
        services: [
          { title: "Team Building & Cohesion", description: "Facilitated retreats focused on trust and communication." },
          { title: "Conflict Resolution Facilitation", description: "Mediation between teams or departments." },
          { title: "Organizational Culture Transformation", description: "Culture audits and tailored intervention plans." },
          { title: "Team Performance Workshops", description: "Accountability, collaboration and role clarity." },
        ],
      },
      {
        heading: "Healthcare & High-Stress Workforce Support",
        services: [
          { title: "Compassion Fatigue Prevention", description: "Boundaries, emotional recovery and self-care for caregivers." },
          { title: "Burnout Recovery Support", description: "Recovery-focused group sessions and 1:1 counselling." },
          { title: "Patient/Client Communication Training", description: "Empathy and sensitivity in high-pressure interactions." },
          { title: "Resilience Training", description: "Practical resilience toolkits for daily use." },
        ],
      },
    ],
  },
  {
    slug: "group-therapy",
    icon: Heart,
    title: "Group Therapy & Development",
    shortDescription:
      "Safe, structured spaces where individuals and communities heal, learn and grow together.",
    tagline: "Connection. Insight. Growth.",
    overview: [
      "Healing and development do not happen in isolation. Many people experience transformation more deeply when surrounded by others who share similar experiences, challenges or aspirations.",
      "Through guided facilitation and structured programs, participants experience connection, insight, accountability and collective growth.",
    ],
    sections: [
      {
        heading: "Therapeutic Support Groups",
        whoFor: [
          "Grief and loss",
          "Trauma and emotional pain",
          "Addiction recovery",
          "Anxiety, depression or emotional overwhelm",
          "Feelings of isolation or disconnection",
        ],
        services: [
          { title: "Group Therapy Sessions", description: "Structured, facilitator-guided sessions for emotional processing." },
          { title: "Grief Support Groups", description: "Compassionate spaces for navigating loss." },
          { title: "Addiction Recovery Groups", description: "Supportive circles encouraging accountability and resilience." },
          { title: "Emotional Healing Circles", description: "Open yet guided spaces for expression and reflection." },
        ],
      },
      {
        heading: "Personal Development Groups",
        services: [
          { title: "Confidence Building Workshops", description: "Overcome self-doubt through guided exercises and reflection." },
          { title: "Emotional Intelligence Groups", description: "Develop awareness of emotions and improve relationships." },
          { title: "Goal Setting & Motivation Groups", description: "Define, plan and work toward meaningful goals." },
          { title: "Mindset Transformation Sessions", description: "Replace limiting beliefs with empowering patterns." },
        ],
      },
      {
        heading: "Professional & Community Groups",
        services: [
          { title: "Corporate Workshops", description: "Communication, stress management, teamwork and wellbeing." },
          { title: "Leadership Cohorts", description: "Structured group programs for emotionally intelligent leaders." },
          { title: "Youth Empowerment Programs", description: "Build confidence, discipline and life direction in young people." },
          { title: "Community Mental Health Sessions", description: "Awareness and resilience programs for communities." },
        ],
      },
    ],
  },
  {
    slug: "specialized-therapy",
    icon: Sparkles,
    title: "Specialized Therapeutic Services",
    shortDescription:
      "Clinically informed interventions for complex emotional, psychological, behavioural and relational challenges.",
    tagline: "From distress and instability → to regulation, healing and restored wellbeing.",
    overview: [
      "We provide specialized therapeutic interventions designed for individuals, children, adolescents, couples, families and groups experiencing complex emotional, psychological, behavioural and relational challenges.",
      "These services are structured, intentional and clinically informed—focusing on healing underlying patterns, restoring stability and supporting long-term functioning.",
    ],
    sections: [
      {
        heading: "Trauma-Informed Therapy & Complex Trauma Support",
        whatYouGain: [
          "Emotional safety and stabilization",
          "Reduced trauma triggers and overwhelm",
          "Improved sense of control and grounding",
          "Healing of long-standing emotional wounds",
        ],
        services: [
          { title: "Trauma processing and integration", description: "Safe, paced work with traumatic experiences." },
          { title: "Grounding and regulation techniques", description: "Tools to manage triggers and emotional overwhelm." },
          { title: "Rebuilding trust", description: "In self and others." },
          { title: "Coping & resilience skills", description: "Strengthen day-to-day functioning." },
        ],
      },
      {
        heading: "Anxiety, Depression & Mood Disorder Support",
        services: [
          { title: "Cognitive Restructuring", description: "Change negative thought patterns." },
          { title: "Emotional Regulation Techniques", description: "Tools for managing intense feelings." },
          { title: "Behavioural Activation", description: "Routine building and activity scheduling." },
          { title: "Stress & Anxiety Management", description: "Practical strategies for daily life." },
        ],
      },
      {
        heading: "Child & Adolescent Therapy",
        intro: "Developmentally suitable and creative therapeutic methods for young clients.",
        services: [
          { title: "Play Therapy", description: "Express emotions and experiences through play (children)." },
          { title: "Art Therapy", description: "Drawing, painting and creative expression for emotional processing." },
          { title: "Adolescent Counselling", description: "Talk-based support for teens." },
          { title: "Behavioural & Emotional Skills Training", description: "Regulation and coping skills." },
          { title: "School Adjustment Support", description: "Help with learning and school-related stress." },
          { title: "Parent-Guided Therapeutic Involvement", description: "Equip parents to support the child's healing." },
        ],
      },
      {
        heading: "Grief, Loss & Bereavement Therapy",
        services: [
          { title: "Grief Processing", description: "Express and work through loss." },
          { title: "Coping with Sadness, Anger & Guilt", description: "Navigate complex post-loss emotions." },
          { title: "Rebuilding Life After Loss", description: "Find meaning and stability again." },
        ],
      },
      {
        heading: "Burnout & Emotional Exhaustion Recovery",
        services: [
          { title: "Stress Recovery Planning", description: "Restore emotional and physical energy." },
          { title: "Boundary Setting", description: "Emotional protection and self-care." },
          { title: "Rest & Restoration Strategies", description: "Sustainable lifestyle rebalancing." },
        ],
      },
      {
        heading: "Life Transition & Adjustment Therapy",
        services: [
          { title: "Adjustment Coping Strategies", description: "Move through change with stability." },
          { title: "Identity Rebuilding", description: "Self-understanding through transition." },
          { title: "Future Planning & Direction", description: "Clarity and confidence in next steps." },
        ],
      },
      {
        heading: "Relationship Trauma & Attachment Repair",
        services: [
          { title: "Attachment Pattern Exploration", description: "Understand recurring relational patterns." },
          { title: "Emotional Safety Rebuilding", description: "Develop secure ways of relating." },
          { title: "Boundary Development", description: "Healthy relational boundaries." },
          { title: "Relational Healing Work", description: "Recover from toxic or painful relationships." },
        ],
      },
    ],
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
      "We design sustainable wellbeing programs that integrate mindfulness, work-life balance and long-term wellness strategy for organizations and individuals.",
    ],
    sections: [
      {
        heading: "Programs",
        services: [
          { title: "Mindfulness & Stress Management", description: "Daily practices that build emotional steadiness." },
          { title: "Work-Life Integration Coaching", description: "Sustainable balance for high performers." },
          { title: "Long-Term Wellness Program Design", description: "Custom wellbeing strategies for organizations." },
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug?: string) => services.find((s) => s.slug === slug);
