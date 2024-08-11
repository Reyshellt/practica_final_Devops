Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/bionic64" # Ubuntu 18.04
    config.vm.network "private_network", ip: "192.168.56.10"
    config.vm.hostname = "servidor-prueba"
    config.vm.provider "virtualbox" do |vb|
        vb.memory = "1024"
    end
end
