import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Insult {
  id: number;
  insult: string;
}



@Injectable({
  providedIn: 'root'
})

export class BardicInsultService {

  constructor(private http: HttpClient) { }

  url = 'localhost:4200/assets/insults.json'

  getInsults(){
    return this.insults;
  }


  
insults= [
    {id:1, insult:"I don't know whether to use charm person or hold monster!"},
    {id:2, insult:"(Sung) There once was the ugliest fellow I knew, with his face twisted up and of horrid hue, but now he's taken second place, now that I have glimpsed your face!"},
    {id:3, insult:"You're the reason baby gnomes cry!"},
    {id:4, insult:"Ugh. What the hell is that all over your face? Oh...it's just your face!"},
    {id:5, insult:"I've seen more threatening geckos!"},
    {id:6, insult:"Beauty is in the eye of the Beholder...which is what you look like. A Beholder."},
    {id:7, insult:"I'm glad you're tall...It means there's more of you I can despise!"},
    {id:8, insult:"Hey, have you ever been mistaken for a (insert)"},
    {id:9, insult:"Some day you'll meet a doppelganger of yourself and be disappointed!"},
    {id:10, insult:"You're lucky to be born beautiful, unlike me, who was born to be a liar!"},
    {id:11, insult:"I could say you're as ugly as an ogre, but that would be an insult to ogres!"},
    {id:12, insult:"You are uglier than puking upwards."},
    {id:13, insult:"I'm tempted to just cast Darkness on you so I don't have to look at you."},
    {id:14, insult:"You look like the armpit of an unshaven bog hag!"},
    {id:15, insult:"You look like a scab on a troll's wart!"},
    {id:16, insult:"No loot is worth having to look at you!"},
    {id:17, insult:"There is no beholder's eye in which you are beautiful!"},
    {id:18, insult:"Your ugly face makes a good argument against raising the dead!"},
    {id:19, insult:"When your god put teeth in your mouth, he ruined a perfectly good asshole!"},
    {id:20, insult:"You look like your mother, and your mother, looks like your father!"},
    {id:21, insult:"Could you go get your husband, I don't like fighting ugly women!"},
    {id:22, insult:"Did your mother cast a darkness spell to feed you!"},
    {id:23, insult:"No wonder you're hiding behind cover, I'd hide too with a face like that!"},
    {id:24, insult:"Do you have a pen? Well you'd better get back to it before the farmer knows you are missing!"},
    {id:25, insult:"Quick grab some fire...no wait, it's ok, it's not an actual troll!"},
    {id:26, insult:"Were you once hit by a melf's acid arrow or have you always looked like a half eaten marrow!"},
    {id:27, insult:"By looking at you, now I know what you get when you scrape out the bottom of the barrel!"},
    {id:28, insult:"I wish I still had that blindness spell, then I wouldn't have to endure that face anymore!"},
    {id:29, insult:"I was wondering what you are, you're fat enough to be an ogre, but I've never seen an ogre THAT ugly before!"},
    {id:30, insult:"By the gods your ugly, I bet your father regrets not pulling out when he had the chance!"},
    {id:31, insult:"Do you know, that if you were at a party surrounded by female zombies, the only thing you'd pull is a hamstring!"},
    {id:32, insult:"Wait, so you're the manifestation of a divine being of supreme power and malevolence, and you chose that face? Do they even have mirrors on your plane of existence!"},
    {id:33, insult:"Green skin was sooo last season!"},
    {id:34, insult:"You are uglier than a dead toad with measles!"},
    {id:35, insult:"Ooh, new monster! Oh, no sorry, it's just an ugly one."},
    {id:36, insult:"Ahhh a hideous fiend! Oh wait no, you're just ugly."},
    {id:37, insult:"You’re the Biggest Kobold I’ve ever seen."},
    {id:38, insult:"Damn, you're ugly enough to be collecting warlock autographs"},
    {id:39, insult:"I don't know whether to charm person or beast!"},
    {id:40, insult:"If you had any more teeth... you'd have one!"},
    {id:41, insult:"I'm not saying your fat, but when I just cast levitate you're somehow immune!"},
    {id:42, insult:"Look at that gentlemen, we've found the ugliest whore in the brothel!"},
    {id:43, insult:"The only thing uglier than your outfit is your face!"},
    {id:44, insult:"I'm not saying you're fat, but you'd ride a horse rather less well than another horse would!"},
    {id:45, insult:"You are like a wench whose natural gifts were paltry!"},
    {id:46, insult:"Aw, did someone leave your cage open!"},
    {id:47, insult:"Hi. I don't think I've ever met someone who would look better if they took an acid arrow to the face!"},
    {id:48, insult:"You look like your face was on fire, and someone tried to put it out with a pick axe!"},
    {id:49, insult:"I can't tell, is that muscle or fat?"},
    {id:50, insult:"Hey, you pox ridden dung heap, I bet not even a starving vampire would go near you!"},
    {id:51, insult:"Even evard's black tentacles wouldn't touch something as gross as you!"},
    {id:52, insult:"Would you like me to remove that curse? Oh my mistake, you were just born that way!"},
    {id:53, insult:"If I were you, I'd go and get my money back for that remove curse spell!"},
    {id:54, insult:"Tell me, did you run away from your parents, or did they run away from you!"},
    {id:55, insult:"I envy people that have never met you!"},
    {id:56, insult:"I'd call you breeding stock, but even farm animals have standards!"},
    {id:57, insult:"Even trolls find you repulsive!"},
    {id:58, insult:"What demon did your mother consort with to have you!"},
    {id:59, insult:"You look like you've blown a goat, I kid you not!"},
    {id:60, insult:"So, if the Gods are responsible for all creation, what kind of fucked up off day did they have to make you!"},
    {id:61, insult:"Learn from your father's mistake, become a eunuch!"},
    {id:62, insult:"So, is it true the blind tarts by the docks turned you down!"},
    {id:63, insult:"I would use my sword on you but I don't want any shit on it!"},
    {id:64, insult:"I wish you were clean enough to spit on you."},
    {id:65, insult:"If you were any more inbred you'd be a sandwich!"},
    {id:66, insult:"You look like you were poured into your clothes but someone forgot to say 'when' to stop!"},
    {id:67, insult:"I'm not sure Prestidigitation is powerful enough to clean you up"},
    {id:68, insult:"is there no more room in the abyss for you?"},
    {id:69, insult:"I swear, if you were any worse at this, you'd be doing our job for us!"},
    {id:70, insult:"You're like a trained ape, only, without the training!"},
    {id:71, insult:"Well, my time of not taking you seriously is coming to a middle!"},
    {id:72, insult:"Ah, I see the serfs got a hold of the weapons again!"},
    {id:73, insult:"A wet cat is tougher than you!"},
    {id:74, insult:"A goblin with one hand nailed to a tree would be more of a threat than you!"},
    {id:75, insult:"OMG. Why don't you give me your weapon so I can hit myself with it, because that'd be more effective than you trying it!"},
    {id:76, insult:"You call that an attack, I've seen dead kittens hit harder than that!"},
    {id:77, insult:"You're like the plague except a plague can kill!"},
    {id:78, insult:"Very impressive, I think I'll hire you out for children's parties!"},
    {id:79, insult:"You're like a gnome on stilts, real cute, but it's not working!"},
    {id:80, insult:"I'd say you were a worthy opponent, but I once fought a flumph wielding a dandelion!"},
    {id:81, insult:"If this fight gets any harder, I'll have to switch it up to folk music!"},
    {id:82, insult:"In a country where anyone can be anything, I will never understand why you chose to be mediocre!"},
    {id:83, insult:"I'd draw my rapier, but I wouldn't want to make you jealous!"},
    {id:84, insult:"You remind me of a kitten I owned once. Weak, lazy, and unintelligent."},
    {id:85, insult:"The god of futile fights appreciates your devotion."},
    {id:86, insult:"You're a disappointment to your ancestors!"},
    {id:87, insult:"Your fighting stance looks like an unfolded lawn chair!"},
    {id:88, insult:"I'm afraid, sir, you are experiencing delusions of adequacy!"},
    {id:89, insult:"I've heard of schoolgirls with better fighting skills than you!"},
    {id:90, insult:"You do know the pointy end is suppose to go in the other guy, right!"},
    {id:91, insult:"You spell like a barbarian! Spell! I said spell! (against a caster/magic user)"},
    {id:92, insult:"You have the dexterity of a rhino! And only half the looks!"},
    {id:93, insult:"Oh such a big sword. You compensating for something!"},
    {id:94, insult:"Just how many wands of enfeeblement do you have shoved up your ass!"},
    {id:95, insult:"Well, now I know what the opposite of awesome is!"},
    {id:96, insult:"You swing like a halfling!"},
    {id:97, insult:"I'm sorry, we were looking for an actual fight, have you seen one?"},
    {id:98, insult:"If you are going to behave like a barbarian, you could at least learn to fight like one!"},
    {id:99, insult:"Everyone is allowed to make a mistake now and then, but I feel you're abusing the privilege!"},
    {id:100, insult:"There are more holes in your capabilities than in Dwarven cheese!"},
    {id:101, insult:"You have all the grace of an antelope. A pregnant antelope, but an antelope nonetheless!"},
    {id:102, insult:"You call that an attack. My great grandmother could do better than that and she's dead!"},
    {id:103, insult:"The only foe you've dropped is my expectations!"},
    {id:104, insult:"You have so many weapons, yet so little skill!"},
    {id:105, insult:"I didn't think anyone could be wholly incompetent, but I stand corrected!"},
    {id:106, insult:"Congratulations! You're a failure."},
    {id:107, insult:"At this rate, I will die from old age before you kill me."},
    {id:108, insult:"Okay, you may attack now. Wait, that WAS your attack?"},
    {id:109, insult:"Trying to make the party laugh is supposed to be my job, not yours"},
    {id:110, insult:"What smells worse than a goblin? Oh yeah, you!"},
    {id:111, insult:"Your magic is as bad as your breath!"},
    {id:112, insult:"Your Breath would put an otyugh off it's breakfast!"},
    {id:113, insult:"What's that smell? I thought breath weapons were supposed to come out of your mouth!"},
    {id:114, insult:"OMG. And I thought troglodytes smelt bad!"},
    {id:115, insult:"Phew! Have you just cast stinking cloud or do you always smell like that!"},
    {id:116, insult:"What smells worse than a dead goblin? A live one!"},
    {id:117, insult:"You're so pungent, sewers are masked by your stench."},
    {id:118, insult:"Ugh. I never thought I'd miss the smell of dwarf! Congratulations. You've gone nose deaf."},
    {id:119, insult:"Sorry, I prefer not to argue with someone whose breath smells like ass!"},
    {id:120, insult:"Ahh. That explains the smell!"},
    {id:121, insult:"Your stench is incredible, you make even paladins wretch."},
    {id:122, insult:"Stand back please, the last time I smelled breath so bad, I was facing a green dragon!"},
    {id:123, insult:"You smell so foul that when you die you'll end up mummified because not even your microbes will dare eat your corpse!"},
    {id:124, insult:"Your mother takes up more tiles than a gelatinous cube!"},
    {id:125, insult:"You are the worst example of your class that I've ever come across!"},
    {id:126, insult:"Animal friendship was the only way your parents could get puppies to play with you!"},
    {id:127, insult:"Do you know what happens to a (insert) when it fails it's save? Neither do I, but based on what happened to your comrade, my money's on 'dies horribly'!"},
    {id:128, insult:"Charisma was OBVIOUSLY your dump stat!"},
    {id:129, insult:"Your challenge rating has to be in the negatives."},
    {id:130, insult:"You are so damn clumsy your 0 level spells are called willtrips!"},
    {id:131, insult:"Your lack of personal hygiene doesn't require a perception check!"},
    {id:132, insult:"You are irrelevant to the main plotline!"},
    {id:133, insult:"You are a one dimensional character that lacks even a generic backstory!"},
    {id:134, insult:"You aren't being the person Mr. Rodgers thought you could be!"},
    {id:135, insult:"You monolog like a subpar 60's Batman villain!"},
    {id:136, insult:"Your doomsday device looks like it was built by ikea!"},
    {id:137, insult:"If I knew darkvision meant I still had to look at your ugly mug at night I'd have rolled human!"},
    {id:138, insult:"It takes you a whole day to cook minute rice!"},
    {id:139, insult:"When you fail your next attack roll, think of me!"},
    {id:140, insult:"What depraved DM thought up YOU?!"},
    {id:141, insult:"Doesn't anybody know not to make Constitution their dump stat?!"},
    {id:142, insult:"I thought every humanoid had enough intelligence to have an alignment."},
    {id:143, insult:"You look so bad you give others exhaustion automatically."},
    {id:144, insult:"Go back to CR 0 where you belong!"},
    {id:145, insult:"A Wild Magic Sorcerer has better control than you!"},
    {id:146, insult:"Someday, you'll go far and I hope you stay there!"},
    {id:147, insult:"Your very existence is an insult to all!"},
    {id:148, insult:"Whomever is willing to have sex with you, is just too lazy to jerk off!"},
    {id:149, insult:"If I wanted to hear something from an asshole, I'd fart!"},
    {id:150, insult:"I'd like to see things from your point of view, but I can't get my head that far up my arse!"},
    {id:151, insult:"Stop me if you've heard this one. The sole purpose of your existence is to serve as a speed bump on others path to greatness - okay you definitely should of stopped me by now!"},
    {id:152, insult:"Why don't you summon yourself some real friends!"},
    {id:153, insult:"You must be thrilled that you can bring joy to everyone in a room by such a simple act of leaving it!"},
    {id:154, insult:"Gentleman, we're in luck. Normally a man must pay admission for such entertainment!"},
    {id:155, insult:"Sir, I would insult you, but mother nature has beaten me to the punch!"},
    {id:156, insult:"Somewhere out there is a tree, tirelessly producing oxygen so you can breathe. I think you owe it an apology!"},
    {id:157, insult:"Believe in yourself because no one else does!"},
    {id:158, insult:"Well, I hear you're quite the investigator. Been looking into anything lately, apart from glory hole's!"},
    {id:159, insult:"You plebeian wretch!"},
    {id:160, insult:"You're going to make an excellent belt!"},
    {id:161, insult:"On a scale of 1 - 10, you're proper screwed!"},
    {id:162, insult:"One day I'm going to make a ballad of this fight. Tell me your name, I hope it rhymes with horribly slaughtered!"},
    {id:163, insult:"Didn't there used to be like twice as many of you guys? What's up with that, huh!"},
    {id:164, insult:"Wait, wait, I just need to ask, what do you need us to put on your headstone!?"},
    {id:165, insult:"Do you even have a name? You are so dead."},
    {id:166, insult:"Do you even have a last name? Hahaha didn't think so!"},
    {id:167, insult:"Call the undertaker, if you're lucky you'll get a bulk rate!"},
    {id:168, insult:"I've seen fungi with more charm!"},
    {id:169, insult:"Is this really how you pictured your life turning out?"},
    {id:170, insult:"It gives me a headache just trying to think down to your level!"},
    {id:171, insult:"You're not a complete idiot...Some parts are obviously missing!"},
    {id:172, insult:"Are you always stupid, or are you making a special effort today!"},
    {id:173, insult:"I'd like to leave you with one thought...but I'm not sure you have anywhere to put it!"},
    {id:174, insult:"If ignorance is bliss, you must be the happiest person alive!"},
    {id:175, insult:"Well...I have met sharper loaves of bread!"},
    {id:176, insult:"I'm guessing you're one of those idiot savants I keep hearing about, apart from the savant part!"},
    {id:177, insult:"If your brain exploded, it wouldn't even mess up your hair!"},
    {id:178, insult:"Your brains are drier than the leftover hardtack at the end of a journey."},
    {id:179, insult:"Somewhere, Your depriving a village of it's idiot!"},
    {id:180, insult:"You're so stupid, if an illithid tried to eat your brain, it would starve to death!"},
    {id:181, insult:"Huh? I didn't cast Feeblemind yet."},
    {id:182, insult:"I was going to cast detect thoughts, but I don't think I'm going to find anything up there!"},
    {id:183, insult:"You're not even intelligent enough to understand my words."},
    {id:184, insult:"I was thinking of casting feeblemind, but I doubt it would work on you!"},
    {id:185, insult:"I've received more witty banter from zombies!"},
    {id:186, insult:"your wits are even duller than your blade"},
    {id:187, insult:"If stupidity ever becomes valuable, people would be fighting over your brain!"},
    {id:188, insult:"If only your talent for conversation matched your urge to do so!"},
    {id:189, insult:"Sir, I regret all the insults that I may throw at you. Half will be too kind, and the rest you probably won't understand!"},
    {id:190, insult:"I'll explain, and I'll use small words so that you are sure to understand!"},
    {id:191, insult:"I'd teach you some manners, but I doubt you are capable of learning them!"},
    {id:192, insult:"Your mouth is like the door of a brothel: whenever you open it someone gets fucked up."},
    {id:193, insult:"If a mindflayer ever attacks us you're safe!"},
    {id:194, insult:"Look at that gentlemen, it can speak common!"},
    {id:195, insult:"If I throw you some peanuts, would you do a trick!"},
    {id:196, insult:"I've washed more brains off my weapon than there is in your head!"},
    {id:197, insult:"I see you're so dumb you're convinced that you'll somehow succeed where better have failed."},
    {id:198, insult:"I'd say you were dropped on your head as a child, but 'thrown' seems like a more fitting word!"},
    {id:199, insult:"Fresh from illithids, are we?"},
    {id:200, insult:"I would challenge you to a battle of wits, but I hate to fight against an unarmed opponent!"},
    {id:201, insult:"I'd say you're as dumb as a rock, but rocks offer better conversation!"},
    {id:202, insult:"You're as dumb as an ogre and half as charming!"},
    {id:203, insult:"Your stupidity would give an illithid indigestion!"},
    {id:204, insult:"You’re so dense, light bends around you!"},
    {id:205, insult:"I don't think you're stupid, I'm guessing you just have bad luck when you think!"},
    {id:206, insult:"Now we know who the spare is!"},
    {id:207, insult:"Isn't it rather dangerous to use one's entire vocabulary in a single sentence!"},
    {id:208, insult:"(After using Prestidigitation to make your breath appear cold), you say I see dumb people!"},
    {id:209, insult:"It's pointless to make fun of you because it will take you the rest of the day to figure out!"},
    {id:210, insult:"You act as if stupidity is a virtue!"},
    {id:211, insult:"You couldn't pour water out of a boot with the instructions on the heel!"},
    {id:212, insult:"Why don't you go lick a branch or whatever a dumb ass like you does in private!"},
    {id:213, insult:"Is your ass jealous of the amount of shit that just came out of your mouth!"},
    {id:214, insult:"have you see a big stupid thing around here? I seem to have lost mine"},
    {id:215, insult:"You would bore the legs off a village idiot!"},
    {id:216, insult:"I can tell your reservoir of courage is fed by the tributary running down your leg!"},
    {id:217, insult:"Who are you again?"},
    {id:218, insult:"Sorry, I don't remember ordering a drink, serving boy. You should go back into the kitchen!"},
    {id:219, insult:"You lack the spine and testicular fortitude to be much of a challenge to me!"},
    {id:220, insult:"You aren't important enough for a specific insult!"},
    {id:221, insult:"How does it feel that you're not worthy of anyone casting a decent spell on you!"},
    {id:222, insult:"I'm glad your sister/wife let you off the chain long enough to come out to play!"},
    {id:223, insult:"I'd call you a pile of dung, but you lack both the depth and the warmth!"},
    {id:224, insult:"I think you should see a healer and ask for a prescription for some balls!"},
    {id:225, insult:"Anyone who told you to be yourself couldn't of given you worse advice!"},
    {id:226, insult:"Well you found your life's purpose. A warning to others!"},
    {id:227, insult:"Your mother's so ugly, folk turn to stone just incase they might happen to catch a glimpse of her face!"},
    {id:228, insult:"Your momma's so ugly, clerics try to turn her!"},
    {id:229, insult:"Are you a half orc crossed with a pig? Oh yeah, there are some things a pig wouldn't do!"},
    {id:230, insult:"I would contact your mother about your death, but I don't speak goblin!"},
    {id:231, insult:"Your mother was a kobold and your father smelled of elderberries!"},
    {id:232, insult:"I'd insult your parents, but you probably don't know who they are!"},
    {id:233, insult:"I heard what happened to your mother, it's not everyday your reflection kills you!"},
    {id:234, insult:"I would try to insult your father, but you were probably mistaken for a half orc, and disowned!"},
    {id:235, insult:"What's the difference between a troll and your mother? One's a stinking ugly monster, and the other is a troll!"},
    {id:236, insult:"Your mother was so stupid, zombies made her a dunce hat!"},
    {id:237, insult:"Your mother is so fat that making a joke here would detract from the seriousness of her condition!"},
    {id:238, insult:"What's the difference between a dragon and a mallard with a cold? One's a sick duck and I forget the punchline, but your mother's a whore!"},
    {id:239, insult:"I think I bedded your mother and your sister. How quaint that they are the same person!"},
    {id:240, insult:"Your mother is about to become a nameless stray dog!"},
    {id:241, insult:"How does it feel to know you'll never be the man your mother was!"},
    {id:242, insult:"Your mother is disappointed in you."},
    {id:243, insult:"Your mother is so ugly she'd make a sea hag die of horror!"},
    {id:244, insult:"Lay down your arms....just like your mother last night!"},
    {id:245, insult:"I'd insult your mother, but you were insult enough!"},
    {id:246, insult:"You look FAR too much like your granddad!"},
    {id:247, insult:"Your mothers a great lay, but you'd know that already, wouldn't you!"},
    {id:248, insult:"So does failure run in your family!"},
    {id:249, insult:"You couldn't hit the broad side of your mother's ass!"},
    {id:250, insult:"I hear your mother died falling from a flying broom, so I'm guessing you live your life the same as your mother does in death. An unrecognisable roadside feature!"},
    {id:251, insult:"I'm guessing you weigh 50lbs while wet, which is the same as your sister when you found her drowned in her own cauldron!"},
    {id:252, insult:"I don't know what cursed thing your mother slept with under a full moon, but she owes us all an apology!"},
    {id:253, insult:"You look like your father would be disappointed in you if he stayed!"},
    {id:254, insult:"How the **** are you the sperm that won?"},
    {id:255, insult:"You adopted stepchild of a cauliflower!"},
    {id:256, insult:"We all make mistakes, I'm sure your parents are good people!"},
    {id:257, insult:"You make an easy target, just like your mother!"},
    {id:258, insult:"Ugh. What the he'll is that all over your face? Oh...its just your face!"},
    {id:259, insult:"You are the feces that is created when shame eats too much stupidly!"},
    {id:260, insult:"You're like a dragon, only shit!"},
    {id:261, insult:"Your mother was a kobold and your father smelled of elderberry!"},
    {id:262, insult:"Some day you'll go far and I hope you stay there!"},
    {id:263, insult:"You're lucky to be born beautiful, unlike me, who was born to be a big liar!"},
    {id:264, insult:"So, you're a half (insert), was your mother a spider or is your ass naturally that huge!"},
    {id:265, insult:"Oh look, both your weapons are tiny!"},
    {id:266, insult:"Wow, that's a fat ass. I guess those behind you are gaining cover for this fight!"},
    {id:267, insult:"You are maggot pie served from a dwarf's codpiece!"},
    {id:268, insult:"You look like your mother, and, your mother looks like your father!"},
    {id:269, insult:"What's that smell? I thought breath weapons were suppose to come out of your mouth!"},
    {id:270, insult:"We're you once hit by a melf's acid arrow or have you always looked like a half eaten marrow!"},
    {id:271, insult:"They say every rose has its thorn, ain't that right, buttercup!"},
    {id:272, insult:"Stop me if you've heard this one. The sole purpose of your existence is to serve as a speedbump on others path to greatness - okay you definitely should of stopped me by now!"},
    {id:273, insult:"Wait, wait, I just need to ask, what do you need us to put on your headstone!"}
];

}
