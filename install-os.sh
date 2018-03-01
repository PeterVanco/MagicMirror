#!/bin/bash

function step {
    echo $1
}

function fail {
    echo $1
    exit 1
}

if [ ! -f ~/install-os.initial.done ] ; then
    step "Disabling overscan"
    sudo echo "disable_overscan=1" >> /boot/config.txt

    touch ~/install-os.initial.done
fi

if [ ! -f ~/install-os.upgrade.done ] ; then
    step "Checking internet connection"
    ping 8.8.8.8 || fail "No internet connection"

    step "Updating system ... this may take a while"
    { sudo apt update && sudo apt upgrade } || fail "System upgrade failed"

    step "Rebooting in 5 seconds ..."
    touch ~/install-os.upgrade.done
    sleep 5
    reboot
fi

if [ ! -f ~/install-os.dependencies.done ] ; then

    sudo yes | apt install cheese


    touch ~/install-os.dependencies.done

fi

