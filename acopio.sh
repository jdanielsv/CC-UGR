
echo "Creando grupo..."
az resource group create -l westeurope -n CC
echo "Desplegando máquina en azure..."
az vm create --resource-group CC --name m11 --image UbuntuLTS > ip
echo "Creada."
echo "Extrayendo ip publica..."
cat ip | jq .publicIpAddress > IP
echo "Ip pública:"
ip=$( cat IP )
echo "Quitar comillas:"
sed -e 's/"//g' IP > ipNoComillas
ipFinal=$( cat ipNoComillas )
echo "Ip final: $ipFinal"

echo -e "[TFG]\n$ipFinal ansible_user=dasavi ansible_python_interpreter=/usr/bin/python3" > ansible_hosts
cp ansible_hosts ~/

echo "Poner ansible hosts variable:"
export ANSIBLE_HOSTS=~/ansible_hosts

echo "Desplegar:"
ansible-playbook provision/provision.yml
echo "Eliminar los archivos residuales..."
rm ip
rm IP
rm ipNoComillas
rm ansible_hosts
