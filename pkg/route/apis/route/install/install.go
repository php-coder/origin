package install

import (
	"k8s.io/apimachinery/pkg/runtime"
	utilruntime "k8s.io/apimachinery/pkg/util/runtime"
	"k8s.io/kubernetes/pkg/api/legacyscheme"

	routeapi "github.com/openshift/origin/pkg/route/apis/route"
	routeapiv1 "github.com/openshift/origin/pkg/route/apis/route/v1"
)

func init() {
	Install(legacyscheme.Scheme)
}

// Install registers the API group and adds types to a scheme
func Install(scheme *runtime.Scheme) {
	utilruntime.Must(routeapi.AddToScheme(scheme))
	utilruntime.Must(routeapiv1.AddToScheme(scheme))
	utilruntime.Must(scheme.SetVersionPriority(routeapiv1.SchemeGroupVersion))
}
