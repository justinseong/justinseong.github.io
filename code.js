 if (keyIsDown(87)) { // 'w' key
        player.setAnimation("knightfront_anim");

        player.y -= 3;
        
    } 
   
    if (keyIsDown(65)) { // 'a' key
        player.setAnimation("knightleft_anim");

        player.x -= 3;
    }
  
    if (keyIsDown(83)) { // 's' key
            player.setAnimation("knightback_anim");

        player.y += 3;
    }
 
    if (keyIsDown(68)) { // 'd' key
            player.setAnimation("knightright_anim");

        player.x += 3;
    }
    
    
    if (keyIsDown(68)) { // 'd' key
            player.setAnimation("knightright_anim");

        player.x += 3;
    }
    
