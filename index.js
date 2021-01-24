const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

client.login(config.token);
client.on('message', async message =>{

var args = message.content.slice(prefix.length).split(/ +/g);
var command = args.shift().toLowerCase();
var text = message.content.toLowerCase();

if(command == "gamers")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("767202791440646155"))
		{
			message.delete();
			message.channel.send("¿Jugamos Algo <@&767202791440646155> <:Gamers:768291517118152745>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:Gamers:768291517118152745> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "minecraft")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768261569846837258"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768261569846837258> <:Minecraft:768293705853042688>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:Minecraft:768293705853042688> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "fortnite")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768261671784284213"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768261671784284213> <:Fortnite:768292574586208277>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:Fortnite:768292574586208277> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "amongus")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768261722443350066"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768261722443350066> <:AmongUs:768292226584936489>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:AmongUs:768292226584936489> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "deadbydaylight")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768296893016440862"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768296893016440862> <:DeadByDaylight:768295201047183381>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:DeadByDaylight:768295201047183381> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "rocketleague")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768297029188845630"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768297029188845630> <:RocketLeague:768329084379463710>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:RocketLeague:768329084379463710> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "leagueoflegends")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768297110294102036"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768297110294102036> <:LeagueOfLegends:768330010104299571>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:LeagueOfLegends:768330010104299571> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "rainbowsix")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768297175251550218"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768297175251550218> <:RainbowSix:768329496231149598>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:RainbowSix:768329496231149598> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "freefire")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768261443622666261"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768261443622666261> <:FreeFire:768330507515330600>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:FreeFire:768330507515330600> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "monopoly")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("768618953580478474"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&768618953580478474> <:Monopoly:768616359323107348>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:Monopoly:768616359323107348> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "argemtunonline")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("769101170152046592"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&769101170152046592> <:ArgentumOnline:769100894791794708>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:ArgentumOnline:769100894791794708> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

if(command == "callofdutymobile")
{
	if(message.channel.id == "778094460864561182")
	{
		if(message.member.roles.cache.has("769262778519126087"))
		{
			message.delete();
			message.channel.send("¿Jugamos <@&769262778519126087> <:CallOfDutyMobile:769266391076306944>?");
		}
		else
		{
			message.delete();
			message.reply("No tienes permisos para usar este comando, por favor reacciona al emoji <:CallOfDutyMobile:769266391076306944> en <#764088179186860064>")
		}
	}
	else
	{
		message.channel.send("Este Comando Solo Funciona En El Canal <#778094460864561182>");
	};
};

});