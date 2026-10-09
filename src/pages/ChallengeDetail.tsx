import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import { Button } from "@/components/ui/button";

type TopicSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  groups?: { heading: string; text: string }[];
  stages?: string[];
};

type TopicDetails = {
  title: string;
  tagline: string;
  intro: string[];
  sections: TopicSection[];
  closing: string;
  urgent?: string;
  primaryCta?: string;
  secondaryCta?: string;
};

const topics: Record<string, TopicDetails> = {
  "addiction-substance-abuse": {
    title: "Addiction & Recovery",
    tagline: "Healing Begins When You Choose to Reach Out.",
    intro: [
      "Addiction can affect health, relationships, work and overall wellbeing. It does not define who you are, and recovery is possible with the right support.",
    ],
    sections: [
      {
        heading: "What Is Addiction?",
        paragraphs: [
          "Addiction is a health condition where a person experiences difficulty controlling substance use or a behaviour despite experiencing harmful consequences.",
        ],
      },
      {
        heading: "Types of Addiction",
        groups: [
          {
            heading: "Substance Addiction",
            text: "Dependence on substances such as alcohol, opioids, cannabis, stimulants, prescription medicines or other drugs.",
          },
          {
            heading: "Behavioural Addictions",
            text: "Compulsive behaviours that become difficult to control and interfere with everyday life, such as gambling, gaming or problematic internet use.",
          },
        ],
        paragraphs: ["Addiction can develop gradually and affect people from all backgrounds."],
      },
      {
        heading: "The Journey of Addiction",
        stages: ["Experimentation", "Regular Use", "Problematic Use", "Dependence", "Addiction", "Recovery"],
        paragraphs: ["Early recognition and support can help prevent the situation from becoming more severe."],
      },
      {
        heading: "Warning Signs",
        items: [
          "Increasing or uncontrolled use or behaviour",
          "Strong cravings or withdrawal symptoms",
          "Changes in mood or behaviour",
          "Withdrawal from family and friends",
          "Declining work or school performance",
          "Financial or relationship difficulties",
          "Repeated attempts to stop without success",
          "Continuing despite negative consequences",
        ],
      },
      {
        heading: "Breaking the Misconceptions",
        paragraphs: [
          "Addiction is not a weakness, lack of character or simply a matter of willpower.",
          "You do not have to reach rock bottom before seeking help. A setback or relapse does not mean recovery has failed; it may be a sign that additional support is needed.",
          "Asking for help is a sign of courage, not weakness.",
        ],
      },
      {
        heading: "Management & Recovery",
        paragraphs: ["Recovery is individualized and may include:"],
        items: [
          "Assessment",
          "Counselling",
          "Detoxification support",
          "Rehabilitation",
          "Family support",
          "Relapse prevention",
          "Continued care",
        ],
      },
      {
        heading: "You Don't Have to Do This Alone",
        paragraphs: [
          "Whether you are struggling yourself or concerned about someone you love, you can start with a conversation.",
          "You don't need to have all the answers before reaching out.",
        ],
      },
    ],
    closing: "Confidential support. Compassionate care. A pathway toward recovery.",
  },
  "marital-family-conflicts": {
    title: "Navigating Family Challenges and Life Transitions",
    tagline: "Every family has a story. Every transition deserves understanding.",
    intro: [
      "Family life is shaped by relationships, shared responsibilities, and experiences that influence our emotional wellbeing. Throughout life, families encounter changes that may strengthen their bonds or introduce new challenges. Understanding these experiences can help individuals and families respond with greater compassion, resilience, and clarity.",
      "Support to help individuals, couples, and families navigate difficult transitions, improve relationships, and develop healthier ways of relating is an integral part of ensuring stability.",
    ],
    sections: [
      {
        heading: "Common Family Challenges and Life Transitions",
        groups: [
          { heading: "1. Divorce and Separation", text: "Divorce and separation involve the ending or restructuring of an intimate relationship. These transitions may bring grief, loneliness, financial pressure, changes in family roles, and challenges in co-parenting. Adjusting to a new reality often requires emotional support, clear communication, and time to rebuild." },
          { heading: "2. Loss Through Death and Bereavement", text: "The death of a loved one can profoundly affect an individual's emotions, family relationships, and sense of security. Grief may involve sadness, anger, guilt, disbelief, or difficulty adjusting to life without the person. Each person's experience is unique, and healing does not follow a fixed timeline." },
          { heading: "3. Blended Families and Step-Family Adjustments", text: "Blended families form when partners bring children from previous relationships into a new family structure. Members may experience difficulties adjusting to new roles, accepting stepparents or stepsiblings, managing different parenting styles, and establishing trust. Patience, consistency, and open communication help create a sense of belonging." },
          { heading: "4. Parenting Challenges and Parent–Child Conflict", text: "Parenting challenges arise when caregivers experience difficulties managing children's emotional, behavioural, developmental, or educational needs. Differences in discipline, communication breakdowns, adolescent independence, and competing expectations can create tension. Understanding each child's needs while maintaining appropriate boundaries helps strengthen parent–child relationships." },
          { heading: "5. Family Conflict and Extended Family Boundaries", text: "Family conflict may arise from differing values, expectations, financial obligations, or unresolved disagreements. Extended family involvement can sometimes create tension around parenting, relationships, inheritance, or personal decisions. Healthy boundaries and respectful communication help preserve family connections while protecting individual wellbeing." },
          { heading: "6. Financial Stress and Family Responsibilities", text: "Financial stress occurs when money-related pressures affect a family's stability, relationships, or daily functioning. Debt, unemployment, unequal financial contributions, and competing responsibilities can lead to anxiety and disagreements. Open discussions, realistic planning, and shared expectations can help families manage these pressures more constructively." },
          { heading: "7. Substance Use and Its Impact on Family Relationships", text: "Substance use can affect trust, finances, communication, parenting, and emotional safety within a family. Relatives may experience frustration, fear, guilt, or exhaustion while trying to support a loved one. Appropriate treatment, healthy boundaries, and family support can help address the impact while protecting everyone's wellbeing." },
          { heading: "8. Marriage and Relationship Difficulties", text: "Relationship difficulties develop when partners struggle with communication, trust, intimacy, shared responsibilities, or differing expectations. When concerns remain unresolved, emotional distance and recurring conflict may develop. Recognising these patterns can help partners make informed decisions and work towards healthier relationships." },
          { heading: "9. Changing Family Roles and Responsibilities", text: "Family roles change as children become independent, parents grow older, or relatives require additional care. These transitions may bring loneliness, uncertainty, caregiver exhaustion, or disagreements about responsibilities. Families benefit from adjusting expectations, sharing responsibilities where possible, and finding new ways to remain connected." },
          { heading: "10. Major Life Transitions and Unexpected Changes", text: "Events such as relocation, illness, retirement, childbirth, job loss, or changes in living arrangements can disrupt familiar routines and create uncertainty. Family members may respond differently to the same event, sometimes leading to misunderstandings. Recognising these differences and developing practical coping strategies can support adjustment." },
        ],
      },
      {
        heading: "How Family Counselling Can Help",
        paragraphs: [
          "Family counselling provides a supportive environment in which individuals, couples, and families can explore their experiences, understand relationship patterns, and identify constructive ways forward.",
          "At Telliarch, our approach focuses on improving communication, managing conflict, processing grief, strengthening relationships, establishing healthy boundaries, and developing practical coping skills. We support families in adapting to change while promoting emotional wellbeing and mutual understanding.",
          "Counselling does not guarantee that every relationship will be restored. Rather, it offers an opportunity to gain insight, make informed choices, and work towards healthier relationships. Where abuse or intimidation is present, safety and appropriate individual support take priority.",
        ],
      },
      {
        heading: "Your Family's Journey Matters",
        paragraphs: [
          "Every family encounters challenges differently. Seeking support is not a sign of failure; it is a step towards understanding, healing, and growth.",
        ],
      },
    ],
    closing: "Every family has a story. Every transition deserves understanding.",
  },
  "suicidal-thoughts-self-harm": {
    title: "Suicide & Suicide Prevention",
    tagline: "Sometimes, Asking “Are You Okay?” Can Make a Difference.",
    intro: [
      "Suicide is a serious concern that can affect people experiencing overwhelming emotional pain, hopelessness, trauma, loss, mental-health difficulties or significant life challenges.",
      "Talking about suicide does not create suicidal thoughts. A compassionate conversation can give someone an opportunity to feel heard, supported and connected to help.",
    ],
    sections: [
      {
        heading: "Understanding Suicidal Thoughts",
        groups: [
          {
            heading: "Passive Suicidal Thoughts",
            text: "A person may wish they were no longer alive or feel that life is not worth living, without having an intention to act on those thoughts.",
          },
          {
            heading: "Active Suicidal Thoughts",
            text: "A person may be thinking about suicide and may have some intention of acting on those thoughts.",
          },
          {
            heading: "Suicidal Planning",
            text: "A person may begin thinking about when, where or how they might attempt suicide. This requires urgent professional attention.",
          },
          {
            heading: "Suicidal Behaviour or Attempt",
            text: "Any act of self-harm carried out with an intention to die requires immediate medical and psychological support.",
          },
        ],
        paragraphs: [
          "All suicidal thoughts should be taken seriously, even when the person says they would never act on them.",
        ],
      },
      {
        heading: "Risk Factors",
        paragraphs: [
          "Suicidal thoughts can arise from a combination of emotional, psychological, social and situational factors. Having a risk factor does not mean that someone will attempt suicide. Risk can change, and timely support can make a significant difference.",
        ],
        items: [
          "Depression and other mental-health difficulties",
          "Previous suicidal thoughts or attempts",
          "Substance or alcohol misuse",
          "Trauma, abuse or significant loss",
          "Relationship or family difficulties",
          "Financial, work or academic pressures",
          "Chronic pain or serious illness",
          "Social isolation or feeling disconnected",
          "Major life changes or overwhelming stress",
        ],
      },
      {
        heading: "Warning Signs",
        paragraphs: [
          "Someone may be struggling more than they are able to express. One sign alone does not confirm suicidal intent. A noticeable change combined with concern should never be ignored.",
        ],
        items: [
          "Talking about death, dying or suicide",
          "Expressing hopelessness or feeling trapped",
          "Saying they are a burden to others",
          "Withdrawing from family and friends",
          "Significant changes in mood, behaviour or personality",
          "Giving away important possessions or saying goodbye",
          "Increased use of alcohol or drugs",
          "Severe agitation, distress or emotional withdrawal",
          "Searching for ways to die or talking about having a plan",
          "A sudden sense of calm after a period of intense distress",
        ],
      },
      {
        heading: "Suicide Prevention",
        paragraphs: ["Prevention begins with connection, early recognition and timely support."],
        groups: [
          { heading: "Notice", text: "Pay attention to changes in behaviour, mood and communication." },
          { heading: "Ask", text: "If you are concerned, ask directly and calmly about suicidal thoughts. You do not need to have the perfect words." },
          { heading: "Listen", text: "Allow the person to speak without judgement, criticism or trying to immediately solve everything." },
          { heading: "Connect", text: "Encourage connection with a mental-health professional, trusted family member or another appropriate support person." },
          { heading: "Create Safety", text: "Where there is immediate risk, do not leave the person alone. Help create a safe environment and seek urgent professional or emergency assistance." },
          { heading: "Follow Up", text: "Support should continue beyond the immediate crisis. Regular check-ins, counselling, family support and appropriate treatment can strengthen recovery." },
        ],
      },
      {
        heading: "Supporting Someone Who Is Struggling",
        groups: [
          { heading: "Listen without judgement", text: "Give them space to talk about what they are experiencing." },
          { heading: "Take them seriously", text: "Avoid dismissing their feelings or telling them to simply “be strong.”" },
          { heading: "Stay connected", text: "Let them know that they do not have to face the situation alone." },
          { heading: "Encourage professional help", text: "A qualified professional can assess risk and provide appropriate support and treatment." },
          { heading: "Act when there is immediate danger", text: "If someone has attempted suicide, seriously harmed themselves, or appears to be in immediate danger, seek emergency medical assistance or take them to the nearest emergency facility." },
        ],
      },
      {
        heading: "Breaking the Misconceptions",
        groups: [
          { heading: "“Talking about suicide will put the idea in someone's head.”", text: "A caring conversation can create an opportunity for someone to seek help." },
          { heading: "“People who talk about suicide are only seeking attention.”", text: "Expressions of suicidal thoughts should always be taken seriously." },
          { heading: "“Someone who looks happy cannot be suicidal.”", text: "Emotional distress is not always visible." },
          { heading: "“Suicide cannot be prevented.”", text: "Early identification, connection, professional intervention and ongoing support can save lives." },
        ],
      },
      {
        heading: "You Don't Have to Face This Alone",
        paragraphs: [
          "If you are struggling, you do not have to wait until things become unbearable before asking for help. If you are worried about someone, reach out, listen and help them connect with appropriate support.",
          "Your life matters. Your pain deserves to be heard. Help is available.",
        ],
      },
    ],
    closing: "Take the First Step: Confidential support. Compassionate care. A safe space to be heard.",
    urgent: "If someone has attempted suicide or is in immediate danger, seek emergency medical assistance or go to the nearest emergency facility now. Do not leave them alone while urgent help is arranged.",
  },
  "anxiety-depression": {
    title: "Common Mental Health Conditions: Understanding, Recognition and Support",
    tagline: "Understanding Yourself. Recognising Change. Seeking Support.",
    intro: [
      "Mental health influences how we think, feel, behave, manage stress, make decisions, and relate to others. Just as physical health can be affected by illness, our emotional and psychological wellbeing can experience difficulties that require understanding and professional support.",
      "Mental health challenges can affect anyone, regardless of age, background, or circumstances. They do not always begin with obvious symptoms. Sometimes, a person may feel unlike themselves, struggle with everyday demands, experience recurring relationship difficulties, or feel emotionally unsettled without understanding why.",
      "At Telliarch, we believe that seeking support is not reserved for moments of crisis. Understanding yourself, recognising changes, and taking steps to protect your wellbeing are valuable parts of personal growth.",
    ],
    sections: [
      {
        heading: "Common Mental Health Conditions",
        groups: [
          { heading: "1. Anxiety Disorders", text: "Anxiety involves persistent or excessive fear, worry, or apprehension that may interfere with everyday life. Common signs include racing thoughts, restlessness, difficulty concentrating, sleep disturbances, physical tension, and repeatedly anticipating the worst. Professional support can help individuals understand anxiety triggers, develop coping skills, and manage its effects on daily functioning." },
          { heading: "2. Depression", text: "Depression is more than temporary sadness. It can affect mood, motivation, relationships, energy levels, and the ability to carry out everyday responsibilities. Common signs include persistent low mood, loss of interest, fatigue, hopelessness, feelings of worthlessness, changes in sleep or appetite, and difficulty concentrating. Appropriate psychological and medical support can help individuals manage symptoms and work towards recovery." },
          { heading: "3. Stress and Burnout", text: "Stress occurs when perceived demands exceed a person's available coping resources. Prolonged stress can affect emotional balance, concentration, sleep, relationships, and physical wellbeing. Burnout, commonly associated with chronic workplace stress, may involve exhaustion, mental distance from work, and reduced professional effectiveness. Recognising stress early, developing healthier coping strategies, and addressing contributing circumstances can help protect wellbeing." },
          { heading: "4. Trauma- and Stressor-Related Conditions", text: "Distressing or threatening experiences can affect emotional safety, trust, relationships, and daily functioning. Some people develop post-traumatic stress disorder (PTSD), which may involve intrusive memories, avoidance, heightened alertness, and persistent feelings of danger. Trauma-informed support can help individuals understand their responses, develop a sense of safety, and process difficult experiences at an appropriate pace." },
          { heading: "5. Bipolar Disorder", text: "Bipolar disorder involves episodes of significant mood disturbance, including depressive episodes and periods of mania or hypomania. Possible signs include unusual changes in energy, reduced need for sleep, racing thoughts, increased activity, elevated or irritable mood, impulsive behaviour, and periods of depression. Professional assessment is important to distinguish bipolar disorder from other causes of mood changes and determine appropriate treatment." },
          { heading: "6. Obsessive-Compulsive Disorder (OCD)", text: "OCD involves recurring, unwanted thoughts, images, or urges (obsessions) and repetitive behaviours or mental acts (compulsions) that a person feels driven to perform. These experiences can cause significant distress, consume time, and interfere with everyday activities. Effective treatments are available." },
          { heading: "7. Attention-Deficit/Hyperactivity Disorder (ADHD)", text: "ADHD is a neurodevelopmental condition that can affect attention, impulse control, and activity levels. Possible signs include distractibility, forgetfulness, restlessness, impulsivity, and difficulty organising tasks or sustaining attention. Symptoms begin during development and may affect school, work, and relationships. A comprehensive assessment helps determine whether ADHD or another factor may explain these difficulties." },
          { heading: "8. Substance Use Disorders", text: "Substance use disorders involve difficulty controlling alcohol or other substance use despite harmful consequences. Possible signs include increasing use, unsuccessful attempts to cut down, cravings, neglect of responsibilities, continued use despite relationship difficulties, and withdrawal symptoms in some cases. Support may involve medical care, psychological interventions, recovery planning, and family support." },
          { heading: "9. Eating Disorders", text: "Eating disorders involve persistent disturbances in eating behaviour and concerns about food, weight, or body image that affect physical and psychological wellbeing. Conditions include anorexia nervosa, bulimia nervosa, and binge-eating disorder. Early assessment and coordinated care are important because eating disorders can have serious health consequences." },
          { heading: "10. Psychotic Disorders, Including Schizophrenia", text: "Psychotic disorders can affect a person's perception of reality, thinking, and interpretation of experiences. Possible signs include hallucinations, delusions, disorganised thinking, unusual beliefs, social withdrawal, and significant changes in functioning. These experiences require professional assessment. Timely clinical care and appropriate treatment can support recovery and quality of life." },
        ],
        paragraphs: [
          "These descriptions are for awareness and education. Experiencing one or more signs does not automatically mean that someone has a mental health condition. Diagnosis requires an appropriate professional assessment.",
        ],
      },
      {
        heading: "Psychological Assessment: You Do Not Need to Wait for a Crisis",
        paragraphs: [
          "You do not have to identify a specific symptom or suspect a particular diagnosis before seeking a psychological assessment. Sometimes, the reason for seeking support is simply a desire to understand yourself better, explore recurring patterns, or make sense of changes you cannot easily explain.",
          "A psychological assessment can help clarify concerns, explore contributing factors, identify strengths, and guide appropriate support. It does not automatically result in a diagnosis; sometimes it provides reassurance, practical recommendations, or a clearer understanding of your experiences.",
          "You do not need to wait until you are struggling significantly to take care of your mental wellbeing.",
        ],
        items: [
          "Feeling emotionally unsettled or unlike yourself without knowing why",
          "Experiencing recurring relationship difficulties or personal struggles",
          "Finding yourself reacting more strongly to situations than you would like",
          "Feeling overwhelmed by responsibilities, even when life appears manageable",
          "Wanting to understand your emotional responses, coping habits, or personal triggers",
          "Navigating a major life transition and wanting guidance",
          "Wanting to strengthen emotional resilience, self-awareness, or decision-making",
          "Having concerns about your wellbeing but being unsure whether they warrant help",
        ],
      },
      {
        heading: "Recognising Warning Signs in Someone Close to You",
        paragraphs: [
          "Mental health difficulties are not always openly expressed. A person may struggle privately, minimise their experiences, or lack the words to explain what is happening. Family members, friends, partners, colleagues, and caregivers may notice changes before the individual seeks help.",
          "One isolated sign does not necessarily indicate a mental health condition. Consider the person's usual behaviour, the persistence and severity of changes, and their impact on everyday functioning.",
        ],
        items: [
          "Mood changes: persistent sadness, anxiety, irritability, hopelessness, or unusual emotional reactions",
          "Behavioural changes: withdrawal, increased aggression, restlessness, loss of interest, or behaviour that differs significantly from usual patterns",
          "Changes in daily functioning: difficulty maintaining personal care, attending work or school, fulfilling responsibilities, or maintaining relationships",
          "Significant or persistent changes in sleep or appetite",
          "Social isolation: avoiding friends, family, or activities previously enjoyed",
          "Increasing substance use to manage stress or difficult emotions",
          "Unusual thinking or perceptions: confusion, strongly held unusual beliefs, hearing or seeing things others do not, or marked changes in thinking",
          "Expressions of hopelessness, meaninglessness, or being unable to continue",
          "Significant distress following bereavement, separation, trauma, job loss, illness, or another major change",
        ],
      },
      {
        heading: "How Can You Support Someone Who May Be Struggling?",
        paragraphs: ["You do not need to diagnose someone to offer meaningful support. A compassionate conversation may be an important first step."],
        groups: [
          { heading: "1. Approach With Care", text: "Choose a suitable, private moment and express your concern without criticism. You might say: “I've noticed you haven't seemed like yourself lately, and I'm concerned about how you're doing. Would you feel comfortable talking about it?”" },
          { heading: "2. Listen Without Judgement", text: "Allow the person to share their experiences at their own pace. Avoid dismissing their feelings, comparing their struggles with those of others, or rushing to provide solutions." },
          { heading: "3. Encourage Professional Support", text: "If difficulties persist, worsen, or affect daily functioning, encourage the person to speak with a qualified mental health professional or healthcare provider. Offer to help find a service, arrange an appointment, or accompany them if they wish." },
          { heading: "4. Respect Their Dignity and Privacy", text: "Whenever possible, involve the person in decisions about seeking help. Avoid labelling, shaming, or sharing personal information unnecessarily." },
          { heading: "5. Recognise When Urgent Help Is Needed", text: "If someone expresses suicidal intentions, threatens serious harm, becomes severely confused, or appears unable to keep themselves safe, seek urgent professional assistance. Contact emergency services or take them to the nearest emergency department." },
        ],
      },
      {
        heading: "When Should You Seek Professional Help?",
        paragraphs: [
          "Consider a psychological or clinical assessment when emotional, behavioural, or cognitive changes persist, cause distress, interfere with everyday functioning, or are difficult to understand. You can also seek support proactively when you want greater self-awareness, help navigating a life transition, or guidance on improving coping strategies and relationships.",
          "If you are concerned about a child, teenager, partner, relative, or friend, you can seek professional guidance on how best to support them. A professional can advise on suitable assessment options, consent, confidentiality, and next steps. Immediate safety concerns require urgent attention rather than waiting for a routine appointment.",
        ],
      },
      {
        heading: "How Telliarch Can Support Your Mental Wellbeing",
        paragraphs: [
          "At Telliarch, we recognise that every person's experience is different. Our approach emphasises understanding, dignity, and practical support. Our aim is to help you understand your experiences, recognise your strengths, identify areas requiring attention, and explore practical steps towards improved wellbeing.",
        ],
        items: [
          "Psychological assessment and exploration of emotional concerns",
          "Individual counselling and emotional support",
          "Stress management and emotional regulation skills",
          "Trauma, grief, and loss support",
          "Relationship and family counselling",
          "Personal development and self-awareness",
          "Guidance and referral for specialised medical or psychiatric care where appropriate",
        ],
      },
      {
        heading: "Your Mental Health Matters",
        paragraphs: [
          "You do not need to have all the answers before seeking help. You do not need to wait until others notice that you are struggling. And you do not need to know exactly what is wrong before asking for support.",
          "Sometimes, the first step is simply recognising that you would like to understand yourself better. If you are concerned about someone close to you, your willingness to notice, listen, and encourage support may also make a meaningful difference.",
          "We believe that understanding is the beginning of meaningful change, and seeking support is a strength. Take the first step towards greater clarity and wellbeing.",
          "Contact Telliarch to explore psychological assessment, counselling, and mental wellness support tailored to your needs.",
        ],
      },
    ],
    closing: "Understanding is the beginning of meaningful change. Seeking support is a strength.",
    urgent: "If someone is in immediate danger or cannot keep themselves safe, seek emergency assistance now. If it is safe to do so, do not leave them alone while urgent help is arranged.",
    primaryCta: "Contact Telliarch",
  },
  "grief-loss": {
    title: "Grief & Loss",
    tagline: "Healing Does Not Mean Forgetting. It Means Learning to Live With What Has Changed.",
    intro: [
      "Loss can profoundly change the way we experience ourselves, our relationships and the future we imagined.",
      "Grief is a natural human response to losing someone, something, or a future that held meaning. It can affect our emotions, thoughts, body, relationships and everyday life.",
      "There is no “right” way to grieve, and healing does not follow a fixed timeline. Each person's experience is unique.",
    ],
    sections: [
      {
        heading: "Types of Grief",
        paragraphs: [
          "Grief can arise from many different kinds of loss. If something mattered deeply to you, its loss can bring grief.",
        ],
        groups: [
          { heading: "Anticipatory Grief", text: "Experienced when a significant loss is expected, such as when a loved one is living with a serious or terminal illness." },
          { heading: "Acute Grief", text: "The intense emotional response that often follows a recent loss." },
          { heading: "Delayed Grief", text: "When emotional responses emerge later, perhaps after a period of numbness or focusing on practical responsibilities." },
          { heading: "Cumulative Grief", text: "When several losses occur within a relatively short period, leaving little opportunity to process each one." },
          { heading: "Disenfranchised Grief", text: "Grief associated with a loss that may not be fully recognized, understood or supported by others." },
          { heading: "Prolonged or Complicated Grief", text: "Persistent and intense grief that significantly interferes with a person's ability to function or reconnect with life." },
          { heading: "Collective Grief", text: "Grief experienced by families, communities or groups following a major event or shared loss." },
          { heading: "Secondary Loss", text: "Grief arising from the changes that accompany a primary loss, such as changes in identity, finances, relationships, responsibilities or lifestyle." },
        ],
      },
      {
        heading: "Understanding the Grieving Process",
        paragraphs: [
          "Grieving is the process of gradually adjusting emotionally, mentally, physically and socially to life after a significant loss. It is not simply about “moving on.” It is about learning to live with what has changed while finding a way to carry forward what remains meaningful.",
          "Grief is rarely a straight path. A person may feel relatively well one day and experience intense sadness the next. A song, photograph, familiar place, anniversary, birthday or unexpected memory can bring emotions back. This does not mean that healing has failed. It is often simply part of the grieving journey.",
        ],
      },
      {
        heading: "The Commonly Known Kübler-Ross Model",
        groups: [
          { heading: "1. Denial: “This cannot be happening.”", text: "After a significant loss, a person may experience shock, disbelief or emotional numbness. This can provide temporary space to absorb a reality that feels too painful or overwhelming." },
          { heading: "2. Anger: “Why did this happen?”", text: "As the reality of the loss begins to settle in, anger or frustration may emerge. A person may feel hurt, betrayed or resentful and may direct these feelings toward themselves, others, circumstances, healthcare professionals, their faith or even the person they have lost." },
          { heading: "3. Bargaining: “If only…”", text: "The mind may repeatedly revisit the past with thoughts such as “If only I had called,” “What if I had noticed earlier?” or “I wish I had done more.” These thoughts can be accompanied by guilt, regret and a strong desire to change what has already happened." },
          { heading: "4. Depression: “How do I live with this?”", text: "The reality of the loss may bring profound sadness, loneliness, emptiness or withdrawal. Everyday activities may feel difficult, and the future may seem unfamiliar. Grief-related sadness is not automatically clinical depression, but persistent or severe symptoms deserve professional attention." },
          { heading: "5. Acceptance: “I am learning to live with this.”", text: "Acceptance does not mean that the loss no longer hurts, that a person has forgotten, or that they are happy about what happened. It means gradually acknowledging the reality of the loss and beginning to adapt to life as it is now while continuing to honour what was meaningful." },
        ],
        paragraphs: [
          "The Kübler-Ross model describes five experiences that may occur during grief. These experiences are not fixed stages that everyone must go through in a particular order. Some people experience several emotions at once, while others may not experience certain emotions at all. Grief may also return in waves, particularly around anniversaries, birthdays, holidays and meaningful memories.",
          "Healing does not mean forgetting. It means gradually learning to live with the loss while allowing life to continue.",
        ],
      },
      {
        heading: "How Grief May Affect You",
        paragraphs: ["Grief can touch every part of our lives. These experiences can be part of grief. Having moments of laughter, peace or happiness does not mean that you have stopped caring or that your grief is less real."],
        groups: [
          { heading: "Emotionally", text: "You may experience sadness, anger, guilt, fear, loneliness, numbness, relief, longing or emotional overwhelm." },
          { heading: "Physically", text: "Grief may bring fatigue, changes in sleep or appetite, body tension, restlessness or reduced energy." },
          { heading: "Cognitively", text: "You may experience forgetfulness, difficulty concentrating, confusion, difficulty making decisions or repeated “what if” thoughts." },
          { heading: "Socially", text: "You may withdraw from others, struggle with conversations, lose interest in activities or notice changes in your relationships." },
        ],
      },
      {
        heading: "How to Support Someone Who Is Grieving",
        paragraphs: ["When someone is grieving, you do not need to have all the answers. Often, your presence, patience and willingness to listen are more valuable than perfect words."],
        groups: [
          { heading: "Be Present", text: "Let them know you are available. Sometimes simply sitting beside someone can provide comfort." },
          { heading: "Listen", text: "Allow them to talk, cry, remember or remain quiet without feeling the need to immediately fix the situation." },
          { heading: "Acknowledge Their Loss", text: "Simple words such as “I am sorry you are going through this” can communicate genuine care." },
          { heading: "Offer Practical Support", text: "Help with meals, errands, childcare, appointments or other everyday responsibilities when appropriate." },
          { heading: "Respect Their Way of Grieving", text: "Some people need to talk; others need quiet. Some cry openly; others do not. Grief looks different for everyone." },
          { heading: "Stay Connected", text: "Continue checking in beyond the funeral or immediate period of loss. Grief often continues long after other people have returned to their routines." },
          { heading: "Encourage Professional Support", text: "When grief becomes overwhelming or significantly affects daily functioning, gently encourage counselling or appropriate professional care." },
        ],
      },
      {
        heading: "What to Avoid When Supporting Someone",
        paragraphs: ["Even well-intended words can sometimes unintentionally minimize someone's pain. Avoid saying:"],
        groups: [
          { heading: "“Be strong.”", text: "“You need to move on.” “Just get over it.” “Everything happens for a reason.” “At least they lived a long life.” “I know exactly how you feel.”" },
          { heading: "Avoid", text: "Rushing the grieving process; comparing their loss with another person's loss; giving unsolicited advice; judging how they express their emotions; pressuring them to return to normal too quickly; avoiding them because you do not know what to say; or turning their grief into a discussion about your own experience." },
          { heading: "Instead, try", text: "“I am here with you.” “You don't have to go through this alone.” “Take the time you need.” “Would you like me to listen or help with something practical?” “It is okay to talk about them.”" },
        ],
      },
      {
        heading: "When Should You Seek Professional Support?",
        paragraphs: ["Grief is a natural process, and many people gradually adjust with time, support and connection. Professional support can be helpful when grief becomes overwhelming, persistent or significantly affects everyday life, relationships or work. Seeking help does not mean that you are grieving incorrectly. Sometimes, you simply need a safe place to process what you are carrying."],
        items: [
          "Persistent hopelessness or severe emotional distress",
          "Significant withdrawal or isolation",
          "Overwhelming guilt or self-blame",
          "Difficulty accepting the reality of the loss",
          "Persistent difficulty functioning",
          "Increasing reliance on alcohol or substances to cope",
          "Significant sleep or appetite difficulties",
          "Thoughts of self-harm, death or suicide",
        ],
      },
      {
        heading: "Grief Counselling",
        paragraphs: ["Grief counselling provides a safe, confidential and compassionate space to explore your experience without judgement or pressure to “move on.” Support may help you:"],
        items: [
          "Process the loss and difficult emotions",
          "Work through guilt, anger and unresolved feelings",
          "Understand your grief responses",
          "Develop healthy coping strategies",
          "Adjust to changes in life and relationships",
          "Navigate difficult memories and anniversaries",
          "Find meaning while honouring what has been lost",
          "Gradually reconnect with everyday life",
          "Maintain a meaningful connection with memories while continuing to move forward",
        ],
      },
      {
        heading: "You Don't Have to Grieve Alone",
        paragraphs: [
          "You can miss someone and still experience joy. You can remember and still move forward. You can heal without forgetting.",
          "Your grief matters. Your story matters. Your healing deserves time, patience and compassion.",
        ],
      },
      {
        heading: "A Gentle Note",
        paragraphs: [
          "The information provided here is intended for education and awareness and does not replace individualized professional assessment, diagnosis or treatment.",
          "If grief becomes overwhelming or is accompanied by thoughts of self-harm or suicide, please reach out for professional support. You do not have to wait until you are overwhelmed to ask for help. Sometimes healing begins with a conversation.",
        ],
      },
    ],
    closing: "A safe space to grieve, process, remember and heal.",
    urgent: "If there is immediate danger, or someone may harm themselves, seek urgent medical or emergency assistance now.",
    primaryCta: "Talk to a Professional",
    secondaryCta: "Book a Consultation",
  },
  "child-teen-struggles": {
    title: "Children and Teenagers: Understanding Developmental Challenges",
    tagline: "Every stage of growing up brings new needs, questions, and possibilities.",
    intro: [
      "Childhood and adolescence are important stages of emotional, cognitive, social, and physical development. As children grow, they learn to manage emotions, build relationships, develop independence, and navigate expectations at home, school, and within their communities.",
      "Growing up can also bring uncertainty, emotional struggles, and behavioural changes. Understanding what children may be experiencing helps parents and caregivers respond with empathy, appropriate boundaries, and meaningful support.",
    ],
    sections: [
      {
        heading: "Understanding Challenges Across Developmental Stages",
        groups: [
          { heading: "1. Early Childhood (0–5 Years)", text: "Children develop attachment, language, emotional regulation, and a sense of security. Common challenges include tantrums, separation anxiety, sleep difficulties, fear, and adjusting to new routines. Consistent caregiving, reassurance, and predictable boundaries help children feel secure." },
          { heading: "2. Middle Childhood (6–11 Years)", text: "School, friendships, and achievement increasingly influence children's development. Challenges may include bullying, academic pressure, low self-esteem, attention difficulties, friendship conflicts, and fear of failure. Encouragement, positive reinforcement, and open communication help build confidence and resilience." },
          { heading: "3. Early Adolescence (12–14 Years)", text: "Physical changes, peer acceptance, and identity exploration become increasingly important. Teenagers may experience mood fluctuations, body-image concerns, peer pressure, social-media stress, and conflict with parents over privacy and independence. Respectful listening, appropriate boundaries, and reassurance support healthy adjustment." },
          { heading: "4. Middle and Late Adolescence (15–19 Years)", text: "Young people increasingly explore personal values, relationships, careers, and future aspirations. Challenges may include examination stress, uncertainty about the future, relationship difficulties, substance-use risks, low motivation, and emotional distress. Guidance, age-appropriate independence, and opportunities to develop decision-making skills are essential." },
        ],
      },
      {
        heading: "Challenges That May Occur at Any Stage",
        paragraphs: ["Children and teenagers may also experience:"],
        items: [
          "Emotional and behavioural difficulties: anxiety, persistent sadness, anger, irritability, or withdrawal",
          "Family transitions: adjusting to divorce, bereavement, blended families, relocation, or conflict at home",
          "School-related challenges: learning difficulties, bullying, academic pressure, and attendance problems",
          "Social difficulties: loneliness, friendship conflicts, peer pressure, and rejection",
          "Digital pressures: cyberbullying, online safety concerns, and unrealistic social comparisons",
          "Self-esteem and identity concerns: struggles with confidence, belonging, and self-image",
          "Mental health concerns: persistent changes in mood, sleep, appetite, or daily functioning",
        ],
      },
      {
        heading: "How Child and Adolescent Support Can Help",
        paragraphs: [
          "Age-appropriate counselling and family support can help children and teenagers understand their emotions, strengthen self-esteem, develop coping skills, improve relationships, and navigate developmental challenges.",
          "At Telliarch, support may include child and adolescent counselling, emotional regulation skills, parent guidance, family counselling, and collaboration with schools where appropriate.",
        ],
      },
      {
        heading: "Growing Up Requires Understanding, Not Just Correction",
        paragraphs: [
          "Children and teenagers are still learning how to express feelings, make decisions, manage relationships, and respond to pressure. Behaviour that appears difficult may sometimes reflect frustration, fear, unmet needs, or difficulty adapting to change.",
          "Understanding behaviour does not mean excusing harmful actions. It means identifying possible underlying concerns and responding in ways that encourage learning, accountability, and emotional growth.",
        ],
      },
      {
        heading: "Parenting Insights: Supporting Growth at Every Stage",
        items: [
          "Connect before you correct: understand what happened and how your child feels before responding. Feeling heard helps children become more receptive to guidance.",
          "Look beyond behaviour: consider whether frustration, anxiety, exhaustion, or developmental needs may be influencing a child's actions.",
          "Set clear and consistent boundaries: acknowledge feelings while maintaining appropriate expectations. Discipline should teach responsibility rather than humiliate or frighten.",
          "Encourage age-appropriate independence: allow children and teenagers to make suitable choices, learn from mistakes, and gradually develop responsibility.",
          "Listen without immediate judgment: create space for honest conversations about friendships, school, emotions, relationships, and personal concerns.",
          "Recognise effort and progress: reinforce honesty, persistence, kindness, and attempts to manage emotions rather than focusing only on mistakes or results.",
          "Model emotional wellbeing: demonstrate healthy ways to manage stress, express feelings, apologise, and resolve disagreements.",
        ],
      },
      {
        heading: "Parents Need Support Too",
        paragraphs: [
          "Parenting can be rewarding and demanding. Financial pressures, relationship difficulties, personal experiences, and exhaustion may influence how parents respond to their children. Feeling overwhelmed does not make someone a bad parent; it may signal a need for support, rest, or new skills.",
          "Parent guidance can help caregivers understand developmental needs, manage parenting stress, respond constructively to difficult behaviour, navigate parent–teenager conflict, establish healthy boundaries, and strengthen relationships with their children.",
        ],
      },
      {
        heading: "Knowing When to Seek Additional Support",
        paragraphs: [
          "Professional guidance may be helpful when a child experiences persistent emotional distress, significant behavioural changes, withdrawal, difficulties at school, or challenges that interfere with everyday functioning. Concerns about self-harm or immediate safety require urgent assessment and support.",
        ],
      },
      {
        heading: "Growing Together",
        paragraphs: [
          "Healthy development flourishes when children feel valued, boundaries are consistent, and mistakes become opportunities for learning. Parents do not need to have every answer; willingness to listen, learn, and repair relationships is an important part of parenting.",
          "We believe that raising emotionally healthy children begins with understanding the child, empowering the parent, and strengthening the relationship between them.",
          "Developmental age ranges are approximate. Each child develops at their own pace, and persistent difficulties should be understood within their individual circumstances.",
        ],
      },
    ],
    closing: "Every stage of growing up brings new needs, questions, and possibilities.",
  },
};

const ChallengeDetail = () => {
  const { slug } = useParams();
  const topicSlug = slug === "stress-burnout" || slug === "loneliness-isolation"
    ? "anxiety-depression"
    : slug;
  const topic = topicSlug ? topics[topicSlug] : undefined;

  if (!topic) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent pt-36 pb-20 text-white">
        <div className="container relative z-10 mx-auto px-4">
          <Link to="/#challenges" className="mb-8 inline-flex items-center text-white/80 transition-smooth hover:text-secondary">
            <ArrowLeft className="mr-2" size={18} /> Back to all topics
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/30">
              <HeartHandshake className="text-secondary" size={28} />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Support & Wellbeing</p>
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">{topic.title}</h1>
            <p className="mb-6 max-w-3xl text-2xl font-semibold leading-snug text-white">{topic.tagline}</p>
            {topic.intro.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-lg leading-relaxed text-white/85">{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <main>
        {topic.sections.map((section, index) => (
          <section key={section.heading} className={index % 2 === 0 ? "py-16" : "bg-muted/35 py-16"}>
            <div className="container mx-auto max-w-5xl px-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <h2 className="mb-6 text-3xl font-bold text-warm-solid">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
                ))}
                {section.groups && (
                  <div className="my-8 grid gap-4 md:grid-cols-2">
                    {section.groups.map((group) => (
                      <article key={group.heading} className="rounded-lg border border-secondary/25 bg-card p-6">
                        <h3 className="mb-2 text-xl font-bold text-foreground">{group.heading}</h3>
                        <p className="leading-relaxed text-muted-foreground">{group.text}</p>
                      </article>
                    ))}
                  </div>
                )}
                {section.stages && (
                  <ol className="my-8 flex flex-wrap items-center gap-2">
                    {section.stages.map((stage, stageIndex) => (
                      <li key={stage} className="flex items-center gap-2">
                        <span className="rounded-md border border-secondary/30 bg-card px-3 py-2 font-semibold text-foreground">{stage}</span>
                        {stageIndex < section.stages!.length - 1 && <ArrowRight className="text-warm-solid" size={18} aria-hidden="true" />}
                      </li>
                    ))}
                  </ol>
                )}
                {section.items && (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start rounded-md border border-border/70 bg-card px-4 py-3 text-card-foreground">
                        <Check className="mr-3 mt-1 shrink-0 text-secondary" size={18} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </section>
        ))}
      </main>

      <section className="bg-muted/35 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-lg border border-secondary/30 bg-card/80 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-warm-solid">A Gentle Note</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The information shared on this page is intended to provide awareness, understanding and encouragement. It is <strong className="text-foreground">not a substitute for professional assessment, diagnosis or treatment.</strong>
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you or someone you care about is experiencing suicidal thoughts or feels unable to stay safe, reach out for professional support as soon as possible. If there is immediate danger, contact local emergency services or go to the nearest emergency department now. If you can do so safely, stay with the person and involve a trusted support person while urgent help is arranged.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">You do not have to navigate difficult moments alone.</strong> Reaching out is not a sign of weakness; it is a courageous step toward safety, healing and hope.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Telliarch is committed to creating a safe, compassionate space where individuals and families can seek support without judgement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-accent py-16 text-center text-white">
        <div className="container mx-auto max-w-3xl px-4">
          {topic.urgent && <p className="mb-6 rounded-md border border-white/30 bg-white/10 p-4 font-semibold">{topic.urgent}</p>}
          <p className="mb-8 text-2xl font-semibold leading-relaxed">{topic.closing}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {topic.primaryCta ? (
              <>
                <Button asChild variant="hero" size="lg">
                  <Link to="/#contact">{topic.primaryCta} <ArrowRight /></Link>
                </Button>
                {topic.secondaryCta && (
                  <Button asChild variant="outline" size="lg" className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary">
                    <Link to="/#contact">{topic.secondaryCta}</Link>
                  </Button>
                )}
              </>
            ) : (
              <Button asChild variant="hero" size="lg">
                <Link to="/#contact">Start a Conversation <ArrowRight /></Link>
              </Button>
            )}
          </div>
          <p className="mt-4 text-sm text-white/75">Confidential support. Compassionate care.</p>
        </div>
      </section>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default ChallengeDetail;