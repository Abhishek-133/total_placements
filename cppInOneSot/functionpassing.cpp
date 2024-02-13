#include<bits/stdc++.h>
using namespace std;
int passByValue(int n){
	n=10;
}
int passByRef(int &n){
	n=10;
	return n;
}

//void passByPointer(int *x){
//	x=10;
//}

int main(){
	int num = 5;
	int x1 = passByValue(num);
	int x2 = passByRef(num);
	cout<<"x1->"<<x1<<"x2->"<<x2;
	return 0;
}
