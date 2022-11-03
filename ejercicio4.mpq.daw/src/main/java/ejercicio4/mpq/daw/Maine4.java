package ejercicio4.mpq.daw;

import java.util.Scanner;

public class Maine4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc=new Scanner(System.in);
		System.out.println("Dime un número");
		int numero=(sc.nextInt());
		
		numero=(((numero*3)+6)/3)-numero;
		boolean resultado=numero==2;
		System.out.println(resultado);
		
		System.out.println("Dime tu año de nacimiento");
		int añoNac=(sc.nextInt());
		
		boolean resultado2=añoNac%2==0||2022-añoNac>=30;
		System.out.println(resultado2);
		
		System.out.println("Dime tu talla de pié");
		
		int tallaPie=(sc.nextInt());
		tallaPie=((((tallaPie*5)+50)*20)+1022)-añoNac;
		System.out.println("El resultado es "+ tallaPie);
		
		
		
		boolean talla=tallaPie/1000>1&&tallaPie/10000<1&&tallaPie/100==(((((tallaPie+añoNac)-1022)/20)-50)/5)&&tallaPie%100==2022-añoNac;
		
		System.out.println(talla);
		
		
				
		
		
		
		
		
		
		
	}

}
